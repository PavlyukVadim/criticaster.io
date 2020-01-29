---
path: /javascript-promise-implementation
date: '2020-01-28'
title: JavaScript Promise Implementation
category: async-js
metaTitle: JavaScript Promise - What is a promise? How promises work? | Criticaster
metaDescription: Promise is a new way to handle async code offered by ES6. Learn more what is promise in JavaScript, how does promise work, promise then and catch ...
metaKeywords: 'javascript, js, js core, promise, closure, array, number, string, bool'
hidden: true
---

<!-- * [How to implement own Promise](#how-to-implement-own-promise) -->

### How to implement own Promise

Promises don't deny callbacks, they just propose a new approach of using them inside an abstraction with a state and calls callbacks that declared via inner method ```then```.

Let's try to implement such abstraction:

```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Thenable {
  constructor(executor) {
    this.status = PENDING
    this.result = null
    // list of records to be processed when the promise becomes "fulfilled"
    this.fulfillReactions = []
    // list of records to be processed when the promise becomes "rejected"
    this.rejectReactions = []

    if (typeof executor === 'function') {
      try {
        executor(this.resolve.bind(this))
      } catch (e) {
        this.reject(e)
      }
    } else if (executor) {
      this.resolve(executor)
    }
  }

  then(handler) {
    const next = new Thenable()
    this.fulfillReactions.push({
      handler,
      next,
    })
    return next
  }

  resolve(value) {
    if (this.status !== PENDING) return
    this.status = FULFILLED
    this.result = value
    // To make promise immutable after resolving 
    Object.freeze(this)

    this.fulfillReactions.forEach(({ handler, next }) => {
      const result = handler(value)
      // Fo immulate adding a new Job into a Job queue
      if (result instanceof Thenable) {
        setTimeout(() => {
          next.resolve(result)
        }, 0)
      } else {
        next.resolve(result)
      }
    })
  }

  reject() {
    if (this.status !== PENDING) return
    this.status = REJECTED
    // ...
  }
}

const asyncFn = (params) => new Thenable((resolve) => {
  setTimeout(() => {
    resolve(params)
  }, Math.random() * 100)
})

const promise = asyncFn('foo')

promise
  .then((value) => { console.log('data11', value); return new Thenable('foo') })
  .then((value) => { console.log('data12', value); value.result = 'updated'; })

promise
  .then((value) => { console.log('data21', value); return 'bar' })
  .then((value) => console.log('data22', value))

console.log(promise)
```