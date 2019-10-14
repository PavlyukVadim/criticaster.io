---
path: /posts/generators-in-javascript
date: '2019-09-18'
title: 📽Generators in JavaScript
category: es6
metaTitle: Generators in JavaScript
metaDescription: Generators in JavaScript
metaKeywords: 'javascript, js, js core, closure, array, number, string, bool'
hidden: true
---

### Generator

```js
function *foo(a) {
  const sum = a + (yield)
  return sum
}

const it = foo(1)
// start
it.next()
// pass value instead of yield
const res = it.next(2) // { value: 3, done: true }
res.value // 3
```

#### Getting data from Generator:

```js
function *foo(a) {
  const sum = a + (yield 'bar')
  return sum
}

const it = foo(1)
// start
const passedValue = it.next() // { value: 'bar', done: false }
// pass value instead of yield
const res = it.next(2) // { value: 3, done: true }
```

#### Generators for handling async code:

```js
function *main() {
  try {
    const data = yield fetch('foo.bar')
    console.log(data)
  }
    catch (err) {
    console.error(err)
  }
}

const it = main()
const promise = it.next().value

promise
  .then((data) => it.next(data))
  .catch((err) => it.throw(err))
```