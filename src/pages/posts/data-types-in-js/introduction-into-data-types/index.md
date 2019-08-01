---
path: /posts/introduction-to-data-types-in-javascript
date: '2019-07-20'
title: 💾 Introduction to Data Types in JavaScript
category: data-types-in-js
metaTitle: Introduction to data types in JavaScript
metaDescription: Introduction to data types in JavaScript
metaKeywords: 'javascript, js, data types, array, number, string, bool'
---

## Table of content:

* [Data types overview](#data-types-overview)
* [Type system classification](#type-system-classification)
* [JavaScript built-in types](#javascript-built-in-types)
* [How to check data type in JavaScript](#how-to-check-data-type-in-javascript)

### Data Types Overview

Let's start with the definition of a ```data type```. What does it mean? ```Type``` is an abstraction that has a bounded set of available values and operations that can be performed on those values.

So we can assume the set of numbers and operations of elementary algebra into some separate type.
Also, we can separate true, false values and boolean algebra operations into another type.

### Type System Classification

Types are obvious in common. But what about JavaScript? You have heard many times that Js is ```untyped```/```dynamically```/```weakly``` typed. Is that true?

Firstly we have to clearly understand what each of these statements means.

Start from untyped, and the most tricky problem that there are a few different definitions of ```untyped```. By some of them, Js is ```typed``` (JavaScript tags values and has different behavior based on those tags), for another it is ```untyped``` (untyped just means everything belongs to a single type). We aren't going to consider that question more deep in that article. The purpose is to show that there can be a few right (wrong) opinions.

But the situation with ```dynamic```/```static``` separation more obviously. 
In simple words ```dynamically typed``` means the variable simply represents any value of any type:

```js
let a = '3'
a = 123
```

And ```weakly typed``` means the compiler can use ```implicit cast```:

```js
'4' - 2 // 4 - 2 = 2 
```

So JavaScript is definitely ```dynamically``` and ```weakly``` typed.

### JavaScript Built-in Types

JavaScript has 7 built-in types:

* ```null```
* ```undefined```
* ```boolean```
* ```number```
* ```string```
* ```object```
* ```symbol``` (added in ES6)

All of them except object are primitives types, and object is referral type.

Primitives types operate by value when referrals by link. So, when you pass primitive as function argument function will get a new instance of primitive and all modifications on it wouldn't change the initial value. In the case of an object, you will modify actually the initial value.

### How to check Data Type in JavaScript

```Typeof``` operator returns the argument type. The result is a string with coresponding type:

```js
typeof undefined         // 'undefined'
typeof true              // 'boolean'
typeof 1                 // 'number'
typeof 'foo'             // 'string'
typeof {}                // 'object'
typeof null              // 'object'
typeof function() {}     // 'function'
typeof Symbol('s')       // 'symbol'
```

As you see, there is non-expected behavior with ```null``` and ```function```:
* ```typeof``` of ```null``` is a legacy error, that can't be fixed for saving compatibility, 
* ```typeof``` of ```function``` should be an ```object```, as far as it's actually a callable object and javascript doesn't have a special ```function``` type, but in practice, it's really useful for detecting a function.

What about ```arrays```? Let's check:

```js
typeof []    // 'object'
```

Well, in context of that seven types it's the most expected result, but what's a reason? The point the same as in function case - arrays are just a subtype of an object.

List of some object subtypes:

* Array
* Date
* Error
* Function
* Generator
* Map
* RegExp
* Set

We'll consider them more detailed them in the following articles.

### Conclusions

JavaScript is a ```dynamically``` (variable can represent any type) ```weakly``` (compiler can use implicit cast) typed programming language that has 7 built-in data types. Data types bounded to value, but no to a variable. 

Object a referral type and others are primitives. An object has subtypes, that include even a function - a callable object.

To check the type of data you have to use a ```typeof``` operator, that works wrong for the ```null``` type.
