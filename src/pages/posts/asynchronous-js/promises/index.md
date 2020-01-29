---
path: /javascript-promise
date: '2019-08-26'
title: ⏰ Promise in JavaScript
category: async-js
metaTitle: JavaScript Promise - What is a promise? How promises work? | Criticaster
metaDescription: Promise is a new way to handle async code offered by ES6. Learn more what is promise in JavaScript, how does promise work, promise then and catch ...
metaKeywords: 'javascript, js, js core, promise, closure, array, number, string, bool'
---

##### Table of content:

* [What is promise in JavaScript](#what-is-promise-in-javascript)
* [Why do we need promises in JavaScript](#why-do-we-need-promises-in-javascript)
* [How does promise work in JavaScript](#how-does-promise-work-in-javascript)
* [What is promise then](#what-is-promise-then)
* [JavaScript promise catch](#javascript-promise-catch)
* [Built-in Promise API](#built-in-promise-api)
* [Immutable javascript promises](#immutable-javascript-promises)

## What is promise in JavaScript?

The promise is a new way to handle the `async code` offered by ES6. A promise in javascript is an object with the inner state that represents a future value. The promise could be in one of there states: `pending`, `fulfilled`, `rejected`.

We can compare the javascript promise with an example of real-life situation when you don’t have something but you are in a process to get it, like when you ordered new stuff in the e-shop (promise created) and waiting when the courier will deliver it (`pending` status), after that the courier could be delivered stuff, you paid for it and transaction is done (`fulfilled`) or you could be notified that there’s no any available stuff (`rejected`).

The only difference between javascript promise and our example that promise is [`immutable`](/js-dictionary#immutable-data), it means that when promise gets status either fulfilled or rejected, the promise couldn’t changes anymore.

### Why do we need promises in JavaScript?

Promise presents a new abstraction to work with `async code`. The difference between promise and callback in an organization of matching handlers to the async code execution result. So when we compare `javascript promise vs callback`, callbacks are a very simple way to execute some function as a result of performing an asynchronous code with error handling as an `error-first contract`, promises propose a rich interface to adding multiple handlers for successful or for unsuccessful async task completion.

Also, promises solve main callbacks problems like:
* `callback hell`
* security problems of callback due to an [`inversion of control`](/js-dictionary#inversion-of-control)
* calling handlers in the wrong way or the wrong number of times

### How does promise work in JavaScript?

A promise is just an object, that has a state. When some events are triggered, the inner state is changes and handlers to depend on the state are called.
To create promise you have to use built-in constructor `Promise`:

```js
const promise = new Promise()
```

If you try to launch that example you’ll catch an error: `Uncaught TypeError: Promise resolver undefined is not a function`. Promise constructor should be called with function executor, which is immediately executed by the constructor. That pattern is called `revealing constructor`.


#### JavaScript promise example

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 1000)
})
```

Here you can see promise timeout, with will be resolved in 1000ms with ‘foo’ value. When a promise resolve is called with some value, it will change promise state into `fulfilled` with that value. And if a promise 'reject' is called with some value, it will change promise state into `rejected` with such value (in most cases it's an Error).

Note: both a promise `resolve` and a promise `reject` don't stop execution.

Example with promise `resolve`:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
    console.log('bar')
  }, 1000)
})

promise.then((data) => { console.log(data) })
// bar
// foo
```

### What is promise then?

The promise has a special method then for adding handlers that will be called when promise status changes to `resolve`. Promise `then` takes two arguments (onFulfilled, onRejected): `onFulfilled` function to call when promise fulfills and `onRejected` when promise rejects:

```js
promise.then((data) => { console.log(data) }) // 'foo'
```
 
With `then` method, you can make a `promise chain`:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 1000)
})

promise.then((data) => data.toUpperCase())
  .then((data) => console.log(data)) // 'FOO'
```

To make it possible `then` method return a promise:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 1000)
})

const p2 = promise.then((data) => data.toUpperCase())
console.log(p2 instanceof Promise) // true
```

Note: if `then` handler returns a new promise, the handler of followed next method will be activated with real value when that promise resolves.
Let’s create a function that produces a promises:

```js
const asyncFn = (params) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(params)
  }, Math.random() * 100)
})
```

So the calls of `asyncFn` you can chain like that:
```js
asyncFn(1).
  then((data) => {
    console.log('data', data)
    return asyncFn(2)
  }).
  then((data) => {
    console.log('data', data)
  })

// data 1
// data 2
```

Also, you can get the last promise from the chain:
```js
const promise = asyncFn(1).
  then((data) => {
    console.log('data', data)
    return asyncFn(2)
  })

promise
  .then((data) => {
    console.log('data', data)
  })

// data 1
// data 2
```
 
When you return from `then` method not an immediate value, but a new promise, it will be asynchronously unwrap:

```js
const p3 = new Promise((resolve, reject) => resolve('B'))
const p1 = new Promise((resolve, reject) => resolve(p3))
const p2 = new Promise((resolve, reject) => resolve('A'))

p1.then((data) => console.log(data))
p2.then((data) => console.log(data))

// A B
```

Note: all non-function types in then method are silent ignored:

```js
const promise = asyncFn(1).
  then((data) => {
    console.log('data', data)
    return asyncFn(2)
  }).
  then('foo').
  then({})

promise
  .then((data) => {
    console.log('data', data)
  })

// data 1
// data 2
```

### JavaScript promise catch

To handle error you can either use `onRejected` function inside method `then` or use the `catch` method:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('foo'))
  }, 1000)
})

promise
  .then((data) => { console.log(data) })
  .catch((err) => { console.log(err) }) // Error: foo
```

Method `catch` as method `then` returns a promise, and after calling `catch` handler you can work with a returned promise as you want (in most cases you just have to handle and log an error):

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo')
  }, 1000)
})

const p2 = promise.catch((data) => data.toUpperCase())
console.log(p2 instanceof Promise) // true
console.log(promise) // Promise <rejected foo>
console.log(p2) // Promise <resolved FOO>
```

### Built-in Promise API

#### Promise.all

`Promise.all` returns a promise with results of two or more parallel/concurrent tasks in order of the tasks despite resolving order. It takes an array of promises (thenable/immediate values will be passed through `Promise.resolve`).

Returned promise will be `fulfilled` when all inner tasks are `fulfilled` or `rejected` if one of those tasks is `rejected`.

Note: with passed `[]` will be immediately resolved with `undefined`.

#### Promise.race

`Promise.race` returns a first fulfilled promise. It takes an array of promises (thenables/immediate values will be passed through `Promise.resolve`).

Returned promise will be `fulfilled` when one of those tasks is `fulfilled` or `rejected` if one of those tasks is `rejected`.

Note: with passed `[]` will be infinity pending.

#### Immediately resolved promise

There are shortcuts that immediately sets promise state: `Promise.resolve(..)` and `Promise.reject(..)`.

These two promises are equivalent:

```js
const p1 = new Promise((resolve, reject) => { resolve('foo') })
const p2 = Promise.resolve('foo')
```

Note: immediately `fulfilled` promise cannot be observed synchronously, when you call `then(..)` on a Promise, even if that promise was already resolved, the handler will be called asynchronously (read more in advanced section).

Another important feature of `Promise.resolve(..)` that it can normalize `thenable` object into a real promise.

### Immutable javascript promises

The very important promises feature, that promises are immutable. It means that when it resolves or rejects, they can't be changed anymore, from that point they could be just observed with the same value:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('foo') }, 1000)
  setTimeout(() => { reject() }, 2000)
})

promise
  .then((data) => { console.log(data) }) // foo
  .catch((err) => { console.log(err) }) // ignored
```

##### For further reading:

* [JavaScript Jobs Queue](/promise-jobs-queue)
* [JavaScript Promise Patterns](/javascript-promise-patterns)
* [JavaScript Promise Implementation](/javascript-promise-implementation)
* [JavaScript Promise Cancellable](/javascript-promise-cancellable)
