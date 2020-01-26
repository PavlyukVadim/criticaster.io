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

<!-- * [Promises overview](#promises-overview) -->

<!-- * [Promise immutability](#promises-immutability)
* [Immediately resolved Promise](#immediately-resolved-promise)
* [Built-in Promise patterns](#built-in-promise-patterns)

### Advanced section:

* [Jobs queue](#jobs-queue)
* [How to implement own Promise](#how-to-implement-own-promise)
* [Cancellable Promise](#cancellable-promise)
* [Custom Promise patterns](#custom-promise-patterns)
* [Decorator of Promises chaining](#decorator-of-promises-chaining) -->

* [What is promise in JavaScript](#what-is-promise-in-javascript)
* [Why do we need promises in JavaScript](#why-do-we-need-promises-in-javascript)
* [How does promise work in JavaScript](#how-does-promise-work-in-javascript)
* [What is promise then](#what-is-promise-then)
* [JavaScript promise catch](#javascript-promise-catch)

## What is promise in JavaScript?

The promise is a new way to handle the `async code` offered by ES6. A promise in javascript is an object with the inner state that represents a future value. The promise could be in one of there states: `pending`, `fulfilled`, `rejected`.

We can compare the javascript promise with an example of real-life situation when you don’t have something but you are in a process to get it, like when you ordered new stuff in the e-shop (promise created) and waiting when the courier will deliver it (`pending` status), after that the courier could be delivered stuff, you paid for it and transaction is done (`fulfilled`) or you could be notified that there’s no any available stuff (`rejected`).

The only difference between javascript promise and our example that promise is [`immutable`](/js-dictionary#immutable-data), it means that when promise gets status either fulfilled or rejected it couldn’t change it anymore.

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

Here you can see promise timeout, with will be resolved in 1000ms with ‘foo’ value.

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

<!-- ### Promises overview

Promises are a new way to handle async code offered by ES6.
It's an object with the inner state (pending, fulfilled, rejected)  that represents a future value.

How to create Promise? Just use ```revealing constructor```: 

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 1000)
})
```

How to use them?

#### Promise.then

Promises have a special method ```then(onFulfilled, onRejected)``` for adding handlers that will be called when Promise changes stutus to 'resolve':

```js
promise.then((data) => { console.log(data) }) // 'foo'
```

Note: You can apply chaining to ```then``` methods, and if ```then``` returns a new Promise, the next method will be activated with real value when new Promise resolves.

Let's create a function that produces a promises:
```js
const asyncFn = (params) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(params)
  }, Math.random() * 100)
})
```

So the calls of asyncFn you can chain like that:

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

When you returns from ```then``` method not an immediate value, but a new Promise, it will be ```asynchronously``` unwrap:

```js
const p3 = new Promise((resolve, reject) => resolve('B'))
const p1 = new Promise((resolve, reject) => resolve(p3))
const p2 = new Promise((resolve, reject) => resolve('A'))

p1.then((data) => console.log(data))
p2.then((data) => console.log(data))

// A B
```

Note: all non-function types in ```then``` method are silent ignored:

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

#### Promise.catch

To handle error you can eathier use ```onRejected``` function inside method ```then``` eathier use ```catch``` method:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { reject(new Error('foo')) }, 1000)
})

promise
  .then((data) => { console.log(data) })
  .catch((err) => { console.log(err) }) // Error: foo
``` -->

<!-- 
### Promise's immutability

The very important Promise feature, that when it resolves(rejects), it becomes an ```immutable``` value that can be observed many times:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('foo') }, 1000)
  setTimeout(() => { reject() }, 2000)
})

promise
  .then((data) => { console.log(data) }) // foo
  .catch((err) => { console.log(err) }) // ignored
```

So, when you add multiple handles on the promise, you get the same results:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { resolve(Math.random()) }, 1000)
  setTimeout(() => { reject() }, 2000)
})

promise
  .then((data) => { console.log(data) }) // 0.41118968976944426
  .catch((err) => { console.log(err) }) // ignored

promise
  .then((data) => { console.log(data) }) // 0.41118968976944426
  .catch((err) => { console.log(err) }) // ignored
```

### Immediately resolved Promise

There are shortcuts that immediately sets Promise state: ```Promise.resolve(..)``` and ```Promise.reject(..)```.

These two promises are equivalent:

```js
const p1 = new Promise((resolve, reject) => { resolve('foo') })
const p2 = Promise.resolve('foo')
```

Note: immediately fulfilled Promise cannot be observed synchronously, when you call then(..) on a Promise, even if that Promise was already resolved, the callback (```then(..)```) will be called asynchronously (read more in advanced section).

And even more important feature of ```Promise.resolve(..)``` that it can normalize ```thenable``` object into real Promise.

### Built-in Promise patterns

#### Promise.all

```Promise.all``` returns a Promise with results two or more parallel/concurrent tasks:

* takes an array of Promise instances (or thenables/immediate values, that will be passed through ```Promise.resolve(..)```)

* returned promise will be fulfilled when all inner tasks are fulfilled

* returned promise will be rejected if one of those tasks is rejected

* with passed ```[]``` immediately resolved with ```undefined```


#### Promise.race

```Promise.race``` returns a first fulfilled Promise:

* takes an array of Promise instances (or thenables/immediate values, that will be passed through ```Promise.resolve(..)```)

* returned promise will be fulfilled when one of those tasks is fulfilled

* returned promise will be rejected if one of those tasks is rejected

* Note: with passed ```[]``` infinity pending

## Advanced section:

### Jobs queue

Let's consider following code sample:

```js
setTimeout(() => {
  console.log('d')
}, 0)

const immediatePromise = Promise.resolve('foo')
const immediatePromise2 = Promise.resolve('bar')

immediatePromise
  .then(() => { console.log('c1'); return immediatePromise2 })
  .then(() => { console.log('c4') })

immediatePromise
  .then(() => { console.log('c2'); return 'c2' })
  .then((data) => { console.log('c3') })

const b = () => { console.log('b') }
const a = () => { console.log('a'); b() }

a()

// a
// b
// c1
// c2
// c3
// c4
// d
```

As we discussed the async behavior of promises during examining immediately resolved promises, all handlers are called asynchronous. But the output of the previous code sample makes to think about 2 strange things: setTimeout's callback had been called later; promise returned by the first fork of the ```immediatePromise``` had been called after promise returned by the second fork. How it can be possible?

Here we go. The name of the main actor - ```PromiseJobs```. Additional Job Queue offered by ES6. So, now we have at least two job queues: ```ScriptJobs``` and ```PromiseJobs```. The last one has a higher priority (it explains setTimeout call question). And another interesting case with ```PromiseJobs``` that if ```PromiseJob``` ends with returning an immediate value, new ```PromiseJob``` will be placed at the end of that ```PromiseJob```, and if ```PromiseJob``` ends with returning another Promise, new ```PromiseJob``` will be placed at the end of that ```PromiseJobs``` queue.

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
``` -->
