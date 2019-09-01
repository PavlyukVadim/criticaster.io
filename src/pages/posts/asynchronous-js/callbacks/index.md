---
path: /posts/callbacks-in-javascript
date: '2019-08-25'
title: 🤙 Callbacks in JavaScript
category: async-js
metaTitle: Callbacks in JavaScript
metaDescription: Callbacks in JavaScript
metaKeywords: 'javascript, js, js core, closure, array, number, string, bool'
---

## Table of content:

* [The easiest way to handle async code](#the-easiest-way-to-handle-async-code)
* [Callback hell](#callback-hell)
* [Inversion of control](#inversion-of-control)

### The easiest way to handle async code

Af far as JavaScript implements high order functions, they can be passed as parameters into other functions, and that approach widely used for handling asynchronous code. So, the idea is in passing into an asynchronous function another function that will be called when the asynchronous function finishes. That passed functions called a callback function.

For example: 

```js
function callbackFn (result) {
  console.log(result)
}

fetch('example.domain', callbackFn)
```

It's the easiest and most efficient (by performance) way to handle async code.
But, at the same time, it has lots of disadvantages.

### Callback hell

When you have a complex logic that relies on results of async function you have 2 option:
make a nested callbacks declarations (that decrese a code readable and disable funtions reusing), or 
define your callbacks fucntions one by one with passing them by name (that makes difficult understanding of the program flow).

### Inversion of control

In mostly cases your callbacks will be connrolled by function from third-party libraries, so you don't control way how they would be called (you even not sure that they would be called).

Possible issues:

* Call the callback too early
* Call the callback too late (or never)
* Call the callback too few or too many times
