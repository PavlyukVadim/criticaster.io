import React, { Component } from 'react'

const degToRad = (angle) => ((angle * Math.PI) / 180)

class Snake {
  constructor(x, y, angle, length, game) {
    this.color = '#ff5050'
    this.name = name
    this.x = x
    this.y = y
    this.angle = angle
    this.length = length
    this.ctx = game.ctx
    this.game = game
    this.coordinates = []
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.arc(this.x, this.y, Snake.HEAD_RADIUS, 0, 2 * Math.PI)
    this.ctx.fill()
    this.ctx.closePath()
  }

  running(canvasSize, that) {
    const radian = degToRad(that.angle)
    that.x += Snake.SPEED * Math.cos(radian)
    that.y += Snake.SPEED * Math.sin(radian)
    that.validationCoordinates(canvasSize)
    that.pushCoordinates()
    that.draw()
    that.findSnakeСollision()
  }

  pushCoordinates() {
    this.coordinates.push({
      x: this.x,
      y: this.y,
    })
    this.snakeLengthControl()
  }

  directionControl(e) {
    if (this.game.finished) return
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

  validationCoordinates({mapW, mapH}) {
    if (
      (this.x < 0) || (this.x > mapW) ||
      (this.y < 0) || (this.y > mapH)
    ) {
      finishGame(this.game)
    }
  }

  turnLeft() {
    this.angle -= Snake.ROTATION_SPEED
    this.move(true)
  }

  turnRight() {
    this.angle += Snake.ROTATION_SPEED
    this.move(true)
  }

  move(rotate = false) {
    const koef = rotate ? 0.8 : 1
    this.x += koef * Snake.SPEED * Math.cos(degToRad(this.angle))
    this.y += koef * Snake.SPEED * Math.sin(degToRad(this.angle))
    this.pushCoordinates()
    this.draw()
  }

  findSnakeСollision() {
    this.coordinates.slice(0, -Snake.HEAD_RADIUS).forEach(({x, y}) => {
      const distance = Math.sqrt(((x - this.x) ** 2) + ((y - this.y) ** 2))
      if (distance < Snake.HEAD_RADIUS + 2) {
        finishGame(this.game)
      }
    })
  }
}
Snake.INITIAL_LENGTH = 150
Snake.HEAD_RADIUS = 5
Snake.SPEED = 2
Snake.ROTATION_SPEED = 5

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

const maxAmountOfFood = 100
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

const findFoodCollision = (foods, ctx, snake) => {
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

const startGame = (game) => {
  const { snake, foods, ctx } = game
  foodGeneration(foods, ctx)

  const canvasSize = {mapW: 500, mapH: 500}
  game.snakeInterval = setInterval(snake.running, 30, canvasSize, snake)
  game.foodInterval = setInterval(findFoodCollision, 15, foods, ctx, snake)

  addEventListener('keydown', snake.directionControl.bind(snake))
}

const finishGame = (game) => {
  if(game.finished) return
  const { snake, snakeInterval, foodInterval } = game
  clearInterval(snakeInterval)
  clearInterval(foodInterval)
  game.finished = true
  alert('You lose :(')
}

class SnakeGame extends Component {
  componentDidMount() {
    const canvas = document.getElementById('map')
    const ctx = canvas.getContext('2d')
    const game = { ctx }

    game.snake = new Snake(100, 100, 0, Snake.INITIAL_LENGTH, game)
    game.foods = []

    startGame(game)
  }

  render() {
    return (
      <div className="contactsPage">
        <h1>Snake</h1>
        <div className="wrapper">
          <p id="score">length: 0</p>
          <canvas id="map" width="500" height="500"></canvas>
        </div>
      </div>
    )
  }
}

export default SnakeGame
