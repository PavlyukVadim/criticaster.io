---
path: /posts/numbers-in-javascript-complete-guide
date: '2019-07-28'
title: 1️⃣ Complete guide to Numbers in JavaScript
category: data-types-in-js
metaTitle: Complete guide to Numbers in Js
metaDescription: Complete guide to Numbers in Js
metaKeywords: 'javascript, js, numbers'
featured: true
hidden: true
---

## Table of content:

* [Introduction to Number](#numbers-introduction)
* [How to get access to Number.prototype]()
* [How to check that a number is integer]()
* [Is floating point math broken?]()
* [Not a number, number]()
* [Infinity]()
* [Minus zero]()

### Introduction to Number

Number - is a numeric data type, that reprecents both inteder and fractional numbers. In JavaScript numbers is based on the floating-point standard ("IEEE 754"). Size of each value is 64-bit.

### How to get access to Number.prototype

There are a lot of useful methods on the prototype of Number, but how to get access to them? When are you use a variable it's pretty easy with number literals it's more tricky. Let's consiter a toFixed method (returns a string with specified number of fractional decimal places) as example:

```js
const a = 5.37
a.toFixed(0)  // '5'
a.toFixed(1)  // '5.4'
a.toFixed(2)  // '5.37'
a.toFixed(3)  // '5.370'
```

To use it with number literals you have to wrap them with brackets or use extra point as far as the first point symbol specified for separating a fractional part:

```js
5.toFixed(2)   // SyntaxError: Invalid or unexpected token
(5).toFixed(2) // '5.00'
5.2.toFixed(2) // '5.20'
5..toFixed(2)  // '5.00', also, you can use two point symbols one after another
```

### How to check that a number is integer

The old good way is checking for a remainder when dividing by 1. But with ES6 you can use Number.isInteger method:

```js
Number.isInteger(5)    // true
Number.isInteger(-0.5) // false 
```

### Is floating point math broken?

Now we gotta consider one of the most popular interview question about numbers:

```js
0.1 + 0.2 === 0.3 // false
```

What is the reason? Is it a JavaScript fail? Actually, nope, it's expected behavior for all of the programming languages based on "IEEE 754" standard. Let's figure out why. For calculation that statement needs to convert numbers to binary64 format, and here's the main source of issues - representation can't be exactly in all cases (think about it as about 1/3 in decimal system), so some time it has some errors, that can change the output result, for ```0.1 + 0.2``` it will be  - ```0.30000000000000004```

(To fix that issue you can use some multiplayer for that values and after operation divide on that multiplayer).

### Not a number, number

JavaScript has spesial value for falled numeric operations - NaN. It means that is result was got invalid/failed number, like following examples:

```js
"foo" - 2  // NaN
"bar" * 5  // NaN
7 / "baz"  // NaN
typeof NaN // 'number'
```
The most interesting characteristic of NaN is that NaN never equal to another NaN value:

```js
NaN === NaN // false
NaN !== NaN // true
```

For checking on a NaN value you have to use a isNaN function:

```js
isNaN(NaN) // true
```
