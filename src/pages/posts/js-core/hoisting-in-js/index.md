---
path: /posts/hoisting-in-javascript
date: '2019-08-14'
title: 🔝 Hoisting in JavaScript
category: js-core
metaTitle: Hoisting in JavaScript
metaDescription: Hoisting in JavaScript
metaKeywords: 'javascript, js, js core, hoisting, array, number, string, bool'
---

## Table of content:

* [Hoisting overview](#hoisting-overview)
* [Functions and Hoisting](#functions-and-hoisting)
* [Multiple declarations](#multiple-declarations)

### Hoisting Overview

As we mentioned in the previous article about the ```lexical scope```, JavaScript has some inner process (that we called ```hoisting```) which break block scoping for a variable declared with the ```var``` keyword inside blocks.
The previous example:

```js
var flag = true
if (flag) {
  var a = 4
  console.log(a) // 4
}
console.log(a) // 4
```

So why variable a is available besides condition block where the last one was declared, and how hoisting connected to that?

Let's look at other samples of code:

```js
var flag = true
console.log(a) // undefined
if (flag) {
  var a = 4
  console.log(a) // 4
}
```

Why does our variable equal ```undefined``` instead of getting ```ReferenceError``` and message that the a is not defined?

Here hoisting goes. The point is that engine already knows about all variables/function before execution (it catch this info before execution), and it means that your declarations actually are known before when the engine goes to the place where you put them.

So previous example can pe represented like:

```js
var a
var flag = true
console.log(a) // undefined
if (flag) {
  a = 4
  console.log(a) // 4
}
```

### Functions and Hoisting

While variables just moved their declaration at the top of the current scope, functions are completely available from any part of their scope:

```js
foo() // bar

function foo() {
  console.log('bar')
}
```

But function expressions behave like other variable (their value is undefined until asset):

```js
foo() // TypeError

var foo = function () {
  console.log('bar')
}
```

With named function expressions situation is the same (they aren't accessible by name even after assign):

```js
foo() // TypeError: foo is not a function
bar() // ReferenceError: bar is not defined

var foo = function bar () {
  console.log('bar')
}

foo() // bar
bar() // ReferenceError: bar is not defined
```

### Multiple declarations

As we mentioned both variables and function are hoisted. The interesting moment that functions hoisted before variables:

```js
foo() // foo 1

function foo() {
  console.log('foo 1')
}

foo() // foo 1

var foo = function () {
  console.log('foo 2')
}

foo() // foo 2
```

Any duplicated declarations will overwrite the previous:

```js
foo() // foo 3

function foo() {
  console.log('foo 1')
}

foo() // foo 3

var foo = function () {
  console.log('foo 2')
}

foo() // foo 2

function foo() {
  console.log('foo 3')
}

foo() // foo 2
```
