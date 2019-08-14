---
path: /posts/lexical-scope-in-javascript
date: '2019-08-13'
title: 🏢 Lexical Scope in JavaScript
category: js-core
metaTitle: Lexical Scope in JavaScript
metaDescription: Lexical Scope in JavaScript
metaKeywords: 'javascript, js, js core, lexical scope array, number, string, bool'
---

## Table of content:

* [What is lexical scope](#what-is-lexical-scope)
* [Function as scope](#function-as-scope)
* [Block as scope](#block-as-scope)
* [try/catch as scope](#trycatch-as-scope)
* [How to change a lexical scope in runtime](#how-to-change-a-lexical-scope-in-runtime)

### What is lexical scope

The scope is the accessibility of objects (variables/functions) in some part of your program.
There're two types of scope: lexical and dynamic. JavaScripts uses the first one.
Lexical scope is a scope that defined during the lexing time (surprisingly).

### Function as scope

In javascript each functions defines a separate scope, for example:

```js
function bar(a) {
  var b = 2
  console.log(a, b) // 1, 2
}

bar(1)
```

When we call the log method to output variable, engine triggers look-up process for a and b, and as far as they are enclosed by bar function they'll be found in that inner scope.

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

In that case, the look-up process will use an inner (hidden) function property [[Scope]], that refers to parent scope until it goes to the global scope.

Note: look-up process works until it find the first match:

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

#### IIFE

If you want just to enclose data into some scope and you actually don't need an extra function that has to call after it definition, you can use ```Immediately Invoked Function Expression```:

```js
var a = 3;
(function () {
  var a = 5
  console.log(a) // 5
})()
console.log(a) // 3
```

### Block as scope

In most programming languages scope are defining by blocks of code, javascript is different:

```js
var flag = true
if (flag) {
  var a = 4
  console.log(a) // 4
}
console.log(a) // 4
```

The reason is in a process called ```hoisting```, we're going to examine it in the next article.

But with ES6 ```let/const``` you can achieve exactly that behavior:

```js
let a = 5
{
  const a = 3
  console.log(a) // 3
}
console.log(a) // 5
```

When the look-up process is failed it throws an error:

```js
var flag = true
if (flag) {
  let a = 4
  console.log(a) // 4
}
console.log(a) // Uncaught ReferenceError: a is not defined
```

#### Loops

```let``` variables have a very useful property - rebinding to each iteration of the loop.
Look at the plain loop:

```js
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

In the context of rebinding it can be presented like:

```js
{
  let j
  for (j = 0; j < 10; j++) {
    let i = j // re-bound
    console.log(i)
  }
}
```

### try/catch as scope

ES3 supports block-scope for the catch parameter:

```js
try {
  const a = 5
  a++
}
catch (err) {
  var foo = true
  console.log(err) // works
}

console.log(foo) // true
console.log(err) // Uncaught ReferenceError
```

### How to change a lexical scope in runtime

Firstly I have to notice, that it's a really bad idea, that disables engine optimization of your program.

There're a few ways to change a lexical scope in runtime:
* ```eval```:
  * takes a string of code and perform it;
  * modifies the existing lexical scope;
  * with strict-mode uses inner lexical scope.
* ```new Function```:
  * creates a function using string as a function body.
* ```with```:
  * creates a new lexical scope;
  * deprecated!
