---
path: /javascript-promise-patterns
date: '2020-01-30'
title: JavaScript Promise Patterns
category: async-js
metaTitle: JavaScript Promise - What is a promise? How promises work? | Criticaster
metaDescription: Promise is a new way to handle async code offered by ES6. Learn more what is promise in JavaScript, how does promise work, promise then and catch ...
metaKeywords: 'javascript, js, js core, promise, closure, array, number, string, bool'
hidden: true
---

<!-- * [Custom Promise patterns](#custom-promise-patterns) -->
<!-- * [Decorator of Promises chaining](#decorator-of-promises-chaining) -->

### Custom Promise patterns

Promise with a timeout based on ```Promise.race```:

```js
const getTimeoutPromise = (delay) => (
  new Promise((resolve, reject) => {
    setTimeout(() => { reject('Timeout') }, delay)
  })
)

const asyncFn = (params) => new Promise((resolve) => {
  setTimeout(() => { resolve(params) }, 200)
})

const p = Promise.race([asyncFn('foo'), getTimeoutPromise(100)])
p.then((data) => console.log('data', data))
  .catch((err) => console.error(err))
```

Promises race until the first success:

```js
const raceToSuccess = (promises) => {
  return Promise
    .all(promises.map(p => {
      return p.then(
        val => Promise.reject(val),
        err => Promise.resolve(err)
      )
    }))
    .then(
      // If all resolved, we've got an array of errors
      errors => Promise.reject(errors),
      // If some of them is rejected, we've got the result 
      val => Promise.resolve(val)
    )
}
```

### Decorator of Promises chaining

It can be useful to create a decorator that emulates chaining by function calls:

Let's modify our asyncFn by adding output before resolving for inspection order of function resolves:

```js
const asyncFn = (params) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('params', params)
    resolve(params)
  }, Math.random() * 100)
})
```

When we call it, it would execute in random order:

```js
asyncFn(1), asyncFn(2), asyncFn(3), asyncFn(4), asyncFn(5)

// params 5
// params 3
// params 2
// params 1
// params 4
```

But what if we need to call them one by one?
Like using ```then```:

```js
asyncFn(1)
  .then(() => asyncFn(2))
  .then(() => asyncFn(3))
  .then(() => asyncFn(4))
  .then(() => asyncFn(5))

// params 1
// params 2
// params 3
// params 4
// params 5
```

You can create the follows decorator:

```js
function chainingDecorator(f) {
  let prev = Promise.resolve()
  return function(...params) {
    prev = prev.then(() => f(...params))
    return prev
  }
}

const chainedFn = chainingDecorator(asyncFn)

chainedFn(1), chainedFn(2), chainedFn(3), chainedFn(4), chainedFn(5)

// params 1
// params 2
// params 3
// params 4
// params 5
```
