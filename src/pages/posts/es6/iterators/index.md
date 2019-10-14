---
path: /posts/iterators-in-javascript
date: '2019-09-18'
title: 🤹 Iterators in JavaScript
category: es6
metaTitle: Iterators in JavaScript
metaDescription: Iterators in JavaScript
metaKeywords: 'javascript, js, js core, closure, array, number, string, bool'
hidden: true
---

### Iterator

```js
const iterator = {
  counter: 0,
  next() {
    return {
      value: this.counter++,
      done: this.counter > 5,
    }
  },
}

const step1 = iterator.next() // { value: 0, done: false }
const step2 = iterator.next() // { value: 1, done: false }
```

### Iterable

Example 1:

```js
const iterable = {
  [Symbol.iterator]() {
    let counter = 0
    const iterator = {
      next() {
        return {
          value: counter++,
          done: counter > 5,
        }
      },
    }
    return iterator
  }
}

for (const step of iterable) {
  console.log(step)
}

// 0
// 1
// ...
```

Example 2 (Iterable & Iterator at the same time):

```js
let counter = 0
const iterable = {
  [Symbol.iterator]() { return this },
  next: () => {
    return {
      done: counter > 5,
      value:  counter++,
    }
  }
}

console.log(...iterable) // 0 1 2 3 4 5
```

### Async Iterator

```js
const asyncIterator = {
  counter: 0,
  async next() {
    return {
      value: this.counter++,
      done: this.counter > 5,
    }
  },
}

const step1 = asyncIterator.next() // Promise
const step2 = asyncIterator.next() // Promise
```

### Async Iterable

```js
const iterable = {
  [Symbol.asyncIterator]() {
    let counter = 0
    const iterator = {
      async next() {
        return {
          value: counter++,
          done: counter > 5,
        }
      },
    }
    return iterator
  }
}

;(async () => {
  for await (const step of iterable) {
    console.log(step)
  }
})()

// 0
// ...
```
