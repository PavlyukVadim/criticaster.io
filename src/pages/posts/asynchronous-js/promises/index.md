---
path: /posts/promises-in-javascript
date: '2019-08-26'
title: ⏰ Promises in JavaScript
category: async-js
metaTitle: Promises in JavaScript
metaDescription: Promises in JavaScript
metaKeywords: 'javascript, js, js core, promise, closure, array, number, string, bool'
hidden: true
---

## Table of content:

* [Promises overview](#)

### Promises overview

Promise is't object that represrnts a future value and contains inner state (pending, fulfilled, rejected).

How to create promise? Just use ```revealing constructor```: 

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 1000)
})
```

#### Promise.then

Promises have a special method ```then(onFulfilled, onRejected)``` for adding handlers:

```js
promise.then((data) => { console.log(data) }) // 'foo'
```

Note: You can apply chaining to ```then``` methods, and it then method retuns a new promise the next method will be activated with a real value when the promise resolves.

Let's create a function that produces a promises:
```js
const asyncFn = (params) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(params)
  }, Math.random() * 100)
})
```

So the calls of asyncFn you can chained like that:

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

When you returns from ```then``` method not an immediate value, but another promise, that promise will be ```asynchronously``` unwrap:

```js
const p3 = new Promise((resolve, reject) => resolve('B'))

const p1 = new Promise((resolve, reject) => resolve(p3))

const p2 = new Promise((resolve, reject) => resolve('A'))

p1.then((data) => console.log(data))
p2.then((data) => console.log(data))

// A B
```

Note: all non-function types in ```then``` method a silent ignored:

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

To handle error you can use or onRejected function inside method ```then``` or use ```catch``` method:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { reject(new Error('foo')) }, 1000)
})

promise
  .then((data) => { console.log(data) })
  .catch((err) => { console.log(err) }) // Error: foo
```

### Promises imutation

The very important Promise feature, that when it resolves(rejects), it becomes an immutable value that can be observed many times.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('foo') }, 1000)
  setTimeout(() => { reject() }, 2000)
})

promise
  .then((data) => { console.log(data) }) // foo
  .catch((err) => { console.log(err) }) // ignored
```

Also, when you add multiple handles on promise, you get the same results:

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

There are shortcats that immediately sets Promise state: ```Promise.resolve(..)``` and ```Promise.reject(..)```.

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

* takes array of Promise instances (or thenables/immediate values, that will be passed through ```Promise.resolve(..)```)

* returned promise will be fulfilled when all inner tasks are fulfilled

* returned promise will be rejected if one of those tasks is rejected

* with passed ```[]``` imideatly resolved with ```undefined```


#### Promise.race

```Promise.race``` returns a first fulfilled Promise:

* takes array of Promise instances (or thenables/immediate values, that will be passed through ```Promise.resolve(..)```)

* returned promise will be fulfilled when one of those tasks is fulfilled

* returned promise will be rejected if one of those tasks is rejected

* Note: with passed ```[]``` infinity pending

## Advanced section:

### Jobs queue:

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

As we discussed async behaviour of promises in when we exanined immediately resolved promises, all handlers are called asynchonous. But the output of the previous code sample make to think about 2 strange things: setTimeout's callback had been called later; promise returned by first fork of the immediatePromise had been called after promise returned by second fork. How it can be possible?

Here we go. The name of the main actor - 'PromiseJobs'. Additional Job Queue offered by ES6. So, now we have at least two job queues: ScriptJobs and PromiseJobs. The last one have a higher priority (explanation setTimeout call question). And the another interesting case with PromiseJobs that if PromiseJob ends with returning a immidiate value, new PromiseJob will be placed at the end of that PromiseJob, and if PromiseJob ends with returning a another Promise, new PromiseJob will be placed at the end of that PromiseJobs queues.

### Promise underhood

Promises don't deny a callbacks, they just propose a new approach of using them inside a abstraction with a state and calls callbacks that declared via inner method ```then```.

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

### Cancable Promise

Promises don't have such a feature from the standard implementation. And there are some reason's. One of them that such feature can be source a additional issues and dissapointeds.

Why it could be a bad idea to cancale a promise? When some consumer of promise calls a cancale method, it affect another consumer's (breaks external immutability) that can be considered as 'action at a distance' anti-pattern.

The dissapointet is in fact that when you cancel some instance of Promise, actually you cancel a calling of relative handlers, but the action that produce that promise can't be cancaled (like fetching in browser env, or reading a file from fs in node env).

Otherwise of that it can be useful in very rarely cases, and some of libreries give such a feature.

Let's try to impletent cancable Promise based on a plain built-in Promise:

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

Promise with timeout based on ```Promise.race```:

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

Promises race to the first success:

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

It can be useful to create decorator that emulates chaining by fucntions calls:

Let's modify our asyncFn by adding output before resolving for inspection of function resolves order:

```js
const asyncFn = (params) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('params', params)
    resolve(params)
  }, Math.random() * 100)
})
```

When we call it, it would executes in random order:

```js
asyncFn(1), asyncFn(2), asyncFn(3), asyncFn(4), asyncFn(5)

// params 5
// params 3
// params 2
// params 1
// params 4
```

But what if we need to call them one by one?
Whit emulation of chaining:

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

You can use the follows decorator:

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
