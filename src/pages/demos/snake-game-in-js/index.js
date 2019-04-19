import React, { Component } from 'react'

const degToRad = (angle) => ((angle * Math.PI) / 180)

class Snake {
  constructor(x, y, angle, length, ctx) {
    this.x = x
    this.y = y
    this.angle = angle
    this.length = length
    this.ctx = ctx
    this.coordinates = []
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = Snake.COLOR
    this.ctx.arc(this.x, this.y, Snake.HEAD_RADIUS, 0, 2 * Math.PI)
    this.ctx.fill()
    this.ctx.closePath()
  }

  running() {
    const radian = degToRad(this.angle)
    this.x += Snake.SPEED * Math.cos(radian)
    this.y += Snake.SPEED * Math.sin(radian)
    this.pushCoordinates()
    this.draw()
  }

  pushCoordinates() {
    this.coordinates.push({
      x: this.x,
      y: this.y,
    })
    this.snakeLengthControl()
  }

  directionControl(e) {
    switch(e.keyCode) {
      case 37: {
        this.turnLeft()
        break
      }
      case 39: {
        this.turnRight()
        break
      }
    }
  }

  turnLeft() {
    this.angle -= Snake.ROTATION_SPEED
  }

  turnRight() {
    this.angle += Snake.ROTATION_SPEED
  }

  snakeLengthControl() {
    if (this.coordinates.length > this.length) {
      const { x, y } = this.coordinates[0]
      this.ctx.beginPath()
      this.ctx.fillStyle = '#fff'
      this.ctx.arc(x, y, Snake.HEAD_RADIUS + 2, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.closePath()
      this.coordinates.shift()
    }
  }
}
Snake.COLOR = '#ff5050'
Snake.INITIAL_LENGTH = 100
Snake.HEAD_RADIUS = 5
Snake.SPEED = 2
Snake.ROTATION_SPEED = 10

class Food {
  constructor(x, y, color, ctx) {
    this.x = x
    this.y = y
    this.color = color
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, Food.RADIUS, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }

  destroy(ctx) {
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = '#fff'
    ctx.arc(this.x, this.y, Food.RADIUS, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
}
Food.RADIUS = 6

const maxAmountOfFood = 20
const foodGeneration = (foods = [], ctx) => {
  let diff = maxAmountOfFood - foods.length
  while (diff > 0) {
    const x = (Math.random() * 500) >> 0
    const y = (Math.random() * 500) >> 0
    const color = '#'+((1 << 24) * Math.random()|0).toString(16)
    const food = new Food(x, y, color, ctx)
    foods.push(food)
    diff--
  }
}

const findFoodCollision = (foods, snake, ctx) => {
  for (const food of foods) {
    if (
      (snake.x > food.x - 10) && (snake.x < food.x + 10) &&
    	(snake.y > food.y - 10) && (snake.y < food.y + 10)
    ) {
      food.destroy(ctx)
    	foods.splice(foods.indexOf(food), 1)
    	snake.length += 1
      changeScore(snake.length - Snake.INITIAL_LENGTH)
    }
  }
}

const changeScore = (score) => {
  const scoreElem = document.getElementById('score')
  scoreElem.innerHTML = `length: ${score}`
}

const startGame = (game, ctx) => {
  const { snake, foods } = game
  foodGeneration(foods, ctx)

  game.snakeInterval = setInterval(snake.running.bind(snake), 30)
  game.foodInterval = setInterval(findFoodCollision, 15, foods, snake, ctx)

  addEventListener('keydown', snake.directionControl.bind(snake))
}

class SnakeGame extends Component {
  componentDidMount() {
    const canvas = document.getElementById('map')
    const ctx = canvas.getContext('2d')
    const game = {}

    game.snake = new Snake(100, 100, 0, Snake.INITIAL_LENGTH, ctx)
    game.foods = []

    startGame(game, ctx)
  }

  render() {
    const mapStyles = {
      display: 'block',
      margin: '0 auto',
      border: '1px dashed red',
    }

    const wrapperStyles = {
      position: 'relative',
      width: '500px',
      height: '500px',
      margin: '20px auto',
    }

    const scoreStyles = {
      position: 'absolute',
      right: '0',
      top: '0',
      margin: '10px',
      font: '35px Comic Sans MS',
    }

    return (
      <div className="contactsPage">
        <h2>Snake game in JavaScript, demo</h2>
        <div className="wrapper" style={wrapperStyles}>
          <p id="score" style={scoreStyles}>length: 0</p>
          <canvas
            id="map"
            style={mapStyles}
            width="500"
            height="500"
          />
        </div>
        Back to tutorials:
        <ul>
          <li>
            <a href="/posts/snake-game-in-js-1">Snake game in JavaScript, Part 1</a>
          </li>
          <li>
            <a href="/posts/snake-game-in-js-2">Snake game in JavaScript, Part 2</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SnakeGame
