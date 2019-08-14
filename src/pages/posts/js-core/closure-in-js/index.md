---
path: /posts/closure-in-javascript
date: '2019-08-15'
title: ✨ Closure in JavaScript
category: js-core
metaTitle: Closure in JavaScript
metaDescription: Closure in JavaScript
metaKeywords: 'javascript, js, js core, closure, array, number, string, bool'
---

## Table of content:

* [Closure overview](#closure-overview)
* [Closure and loops](#closure-and-loops)

### Closure overview

In that section, we should have a clear understanding of what scope is. Because the meaning of closure consists of the lexical scope. And the second part of closure it's binding of function to it lexical scope despite place where function calls.

So, look at this example:

```js
function foo() {
  var a = 5
  function bar() {
    console.log(a)
  }

  return bar
}

const barInGlobalScope = foo()
barInGlobalScope() // 5
```

What is going here? Function bar has access to the variable a, function foo returns bar, and when we call a new bar function from the global scope, this function still has access to the variable.

If you create a new instance of the ```bar``` function, that function will get an own scope values:

```js
function foo() {
  var a = 5
  function bar() {
    a++
    console.log(a)
  }

  return bar
}

const barInGlobalScope1 = foo()
const barInGlobalScope2 = foo()
barInGlobalScope1() // 6
barInGlobalScope1() // 7

barInGlobalScope2() // 6
```

And, when two functions are created together they have access to the same values from their scope:

```js
function foo() {
  var a = 5
  function bar() {
    a++
    console.log(a)
  }

  function baz() {
    a++
    console.log(a)
  }

  return [bar, baz]
}

const [
  barInGlobalScope,
  bazInGlobalScope,
] = foo()

barInGlobalScope() // 6
bazInGlobalScope() // 7
```

### Closure and loops

I bet, you've seen that loop:

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 100)
}
// 10 (10 times)
```

How to fix that using the closure power?
We have to bind each iteration to the counter:

```js
for (var i = 0; i < 10; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j)
    }, j * 100)
  })()
}
// 0
// 1
// ...
// 9
```

Also, you can pass counter as ```IIFE``` argument:

```js
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    }, j * 100)
  })(i)
}
```

Or, if you recall property of ```let``` variables for loops (re-binding) you can make as follows:

```js
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 100)
}
```
