---
path: /posts/lexical-scope-in-javascript
date: '2019-08-13'
title: 🏢 Lexical Scope in JavaScript
category: js-core
metaTitle: Lexical Scope in JavaScript
metaDescription: Lexical Scope in JavaScript
metaKeywords: 'javascript, js, data types, array, number, string, bool'
hidden: true
---

## Table of content:

* [Data types overview](#data-types-overview)
* [Type system classification](#type-system-classification)
* [JavaScript built-in types](#javascript-built-in-types)
* [How to check data type in JavaScript](#how-to-check-data-type-in-javascript)

### What is lexical scope?

The scope is the accessibility of some objects in some part of your programm.
Lexical scope is a scope that defined during lexing time (surprisingly).


### Functions as scope

In javascript each functions defined a separate scope, for example:

```js
function bar(a) {
  var b = 2
  console.log(a, b) // 1, 2
}

bar(1)
```

When we call log method to output variable, inner engine mechanism triger look-up process for a and b, and as far as they are enclosed by bar function they'll be found in that inner scope.

But, what if variable is absent in function defenition:


```js
function foo(a) {
  var b = 2

  function bar(a) {
    console.log(a, b) // 1, 2
  }

  bar(a)
}

foo(1)
```

In that case look-up process will use a inner (hidden) function property [[Scope]], that refers to parent scope while it goes to the global scope.

Note: look-up process works untill it find the first match:

```js
var a = 3
var b = 4

function foo(a) {
  var b = 2

  function bar(a) {
    console.log(a, b) // 1, 2
  }

  bar(a)
}

foo(1)
```

### Blocks As Scopes

In most programming languages scope are defining by blocks of code, javascript is different:

```js
var flag = true
if (flag) {
  var a = 4
  console.log(a) // 4
}
console.log(a) // 4
```

The reason is in a process that called hoisting, we're going to examinate it in the next article.

But with ES6 let/const you can ahcive exactly that behaviour:

```js
var flag = true
if (flag) {
  let a = 4
  console.log(a) // 4
}
console.log(a) // Uncaught ReferenceError: a is not defined
```

### How to change a lexical scope in runtime

Firstly I have to notice, that is't a really bad idea, that disable engine inner optimization of your program.

There're a few ways to change a lexical scope in runtime:
* eval
  * takes a string of code and perform it
  * modify existing lexical scope
  * with strict-mode use inner lexical scope
* new Function(..)
  * create a function using string as function body
* with
  * creates a new lexical scope
  * deprecated!

