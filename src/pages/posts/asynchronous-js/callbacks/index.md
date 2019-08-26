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

* [Closure overview](#closure-overview)

### The eaiest way to handle async code

Af far as JavaScript implements high order functions, they can be passed as parameters into another functions, and that appoach widely used for handling async code. So, the idea in passing into a async function another function that will be called when async function finishes. That passed functions called a callback function.

For example: 

```js
function callbackFn (result) {
  console.log(result)
}

fetch('example.domain', callbackFn)
```

It's the eaiest and most efficient by perfomance way to handle async code.
But, at the same time it has lot's of disadvantages.

### Callback hell

When you have a complex logic that rely on resuls of asycn function you have 2 option:
make a nested callbacks declarations (that decrese a code readable and funtions reusing), or 
define your callbacks fucntions one by one with passing them by name (that confuse understanding of the program control flow).

### Invertion of control

In mostly cases your callbacks will be connrolled by function from third-party libraries, so you don't control a way how they would be called (you even not sure that they would be called).
