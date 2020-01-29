---
path: /javascript-promise-cancellable
date: '2020-01-27'
title: JavaScript Promise Cancellable
category: async-js
metaTitle: JavaScript Promise - What is a promise? How promises work? | Criticaster
metaDescription: Promise is a new way to handle async code offered by ES6. Learn more what is promise in JavaScript, how does promise work, promise then and catch ...
metaKeywords: 'javascript, js, js core, promise, closure, array, number, string, bool'
hidden: true
---

<!-- * [Cancellable Promise](#cancellable-promise) -->

### Cancellable Promise

Promises don't have such a feature under hood. And there are some reasons. One of them that such feature can be a source of additional issues and misunderstandings.

Why it could be a bad idea to cancel a promise? When some consumer of promise calls a cancel method, it affects another consumer's (breaks external immutability) that can be considered as 'action at a distance' anti-pattern.

The misunderstanding is in fact that when you cancel some instance of Promise, actually you cancel a calling of relative handlers, but the action that produces that promise can't be canceled (like fetching in browser env or reading a file from fs in node env).

However, it can be useful in very rare cases, and some of the libraries (like bluebird.js) give such a feature.

Let's try to implement cancellable Promise based on a plain built-in Promise:

```js
class Cancelable extends Promise {
  constructor(executor) {
    super((resolve, reject) => {
      executor(value => {
        if (this.canceled) {
          reject(new Error('canceled'))
        }
        resolve(value)
      }, reject)
    })
    this.canceled = false
  }

  cancel() {
    this.canceled = true
  }
}

const promise1 = new Cancelable((resolve, reject) => {
  setTimeout(() => { resolve('foo') }, 1000)
})

const promise2 = new Cancelable((resolve, reject) => {
  setTimeout(() => { resolve('foo') }, 2000)
})

promise1
  .then((value) => {
    console.log('promise1', value)
    promise2.cancel()
  })

promise2
  .then((value) => console.log('promise2', value))
  .catch((e) => console.error('promise2', e))

// promise1 foo
// promise2 Error: canceled
```
