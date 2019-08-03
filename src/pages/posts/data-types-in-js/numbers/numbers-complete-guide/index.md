---
path: /posts/numbers-in-javascript-complete-guide
date: '2019-07-28'
title: 1️⃣ Complete guide to Numbers in JavaScript
category: data-types-in-js
metaTitle: Complete guide to Numbers in JS
metaDescription: Complete guide to Numbers in JS
metaKeywords: 'javascript, js, numbers'
---

## Table of content:

* [Introduction to Number](#introduction-to-number)
* [How to get access to Number.prototype](#how-to-get-access-to-numberprototype)
* [How to check that a number is integer](#how-to-check-that-a-number-is-an-integer)
* [Is floating point math broken?](#is-floating-point-math-broken)
* [Not a number, number](#not-a-number-number)
* [Special values](#special-values)

### Introduction to Number

Number - is a numeric data type, that represents both integer and fractional numbers. In JavaScript numbers is based on the floating-point standard (```"IEEE 754"```). Size of each value is 64-bit.

(!Advanced section, you can skip for first reading)

Representation schema is located below:

Sign|Exponent      |Mantissa
:--:|:------------:|:----------------------------------------------------:
s   |eee eeeeeeee  |ffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff
1   |11            |52

Due to representation, highest integer value without losing precision is ```2^53 - 1``` (look at the size of mantissa), starts from ES6 you can get this value using ```Number.MAX_SAFE_INTEGER```.

The maximum floating-point value that can be represented is roughly ```1.798e+308``` (```Number.MAX_VALUE```), minimum - ```5e-324``` (```Number.MIN_VALUE```)

```Infinity``` and ```NaN``` are also encoded in the mantissa – with ```2047``` as an exponent. If the mantissa is ```0```, it is a positive or negative ```Infinity```. If it is not, then it is a ```NaN```.

### How to get access to Number.prototype

There are a lot of useful methods on the prototype of Number, but how to get access to them? When are you use a variable it's pretty easy, with number literals it's more tricky. Let's consiter a toFixed method (returns a string with specified number of fractional decimal places) as example:

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

### How to check that a number is an integer

The old good way is checking for a remainder when dividing by 1. But with ```ES6``` you can use ```Number.isInteger``` method:

```js
Number.isInteger(5)    // true
Number.isInteger(-0.5) // false 
```

### Is floating point math broken?

Now we gotta consider one of the most popular interview question about numbers:

```js
0.1 + 0.2 === 0.3 // false
```

What is the reason? Is it a JavaScript fail? Nope, it's expected behavior for all of the programming languages based on ```"IEEE 754"``` standard. Let's figure out why. For calculation that statement needs to convert numbers to ```binary64``` format, and here's the main source of issues - representation can't be exactly in all cases (you can think about it as about 1/3 in decimal system), so sometimes it has some errors, that can change the output result, for ```0.1 + 0.2``` it will be  - ```0.30000000000000004```

(To fix that issue you can use some multiplicator for that values and after operation divide on that multiplicator).

### Not a number, number

JavaScript has spesial value for falled numeric operations - ```NaN```. It means that is result was got invalid/failed number, like following examples:

```js
"foo" - 2  // NaN
"bar" * 5  // NaN
7 / "baz"  // NaN
typeof NaN // 'number'
```
The most interesting characteristic of ```NaN``` is that ```NaN``` never equal to another value:

```js
NaN === NaN // false
NaN !== NaN // true
```

For checking on a NaN value you have to use a ```isNaN``` function:

```js
isNaN(NaN) // true
```

### Special values

Besides the ```NaN```, there are some other special values:

* ```Infinity```
* ```-Infinity```
* ```-0```

Examples with special values:

```js
1 / 0	 // Infinity
-1 / 0	 // -Infinity
0 / -1   // -0
-2 * 0   // -0
-0 === 0 // true
-0 < 0   // false
```