---
path: /posts/closure-in-javascript
date: '2019-08-15'
title: ✨ Closure in JavaScript
category: js-core
metaTitle: Closure in JavaScript
metaDescription: Closure in JavaScript
metaKeywords: 'javascript, js, data types, array, number, string, bool'
hidden: true
---

## Table of content:

* [Closure overview](#data-types-overview)

### Closure Overview

In that section we should have a clear understanding what scope is. Because, closure meaning consist of the lexical scope. And the second part of closure it's binding of funcion to it lexical scope despite of place where function calls.

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

What is going here? Function bar has access to the variable a, function foo returns bar, and when we call a new bar function from the global scope, this function still have access to the a variable


Each function has a separate binding to the values from thei scope:

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

Loops and closure
