---
path: /posts/introduction-to-data-types-in-javascript
date: '2019-07-20'
title: 💾 Introduction to Data Types in JavaScript
category: data-types-in-js
metaTitle: Introduction into data types in JavaScript
metaDescription: Introduction into data types in JavaScript
metaKeywords: 'javascript, js, data types, array, number, string, bool'
hidden: true
---

## Table of content:

* [Data Types Overview](#build-in-types)
* [Type system classification](#type-system-classification)
* [Build-in Types](#build-in-types)
* [How to check data type in JS]()

### Data Types Overview

Let's start from defenition of types. What does it mean? Type is an abstraction that has bounded set of avaliable values and operations that can be performed on that values.

So we can assume the set of numbers and elementary algebra into a some separate type
Also, we can separate true, false value and boolean algebra into another type.

### Type system classification

Types in common are clear. But what about JavaScript? You have heared a many times that Js is untyped/dynamically/weakly typed. Is that true?

Firsty we have to clearly understand what each of these statements means.

Start from untyped, and the most tricky problem that there's a few different definitions of untyped. By some of them Js is typed (JavaScript tags values and has different behaviour based on those tags), for another (untyped just means everything belongs to a single type) Js is untyped. We aren't going to consider that question more deep in that article. The purpose is to shaw that here can be a few right opinion.

But situation with dynamic/static separation more obviously. 
In symply words dynamically typed means the variable simply represents any value of any type:

```js
let a = '3'
a = 123
```

And weakly typed means the compiler can use implicit cast:

```js
'4' - 2 // 4 - 2 = 2 
```

So JavaScript is definitely dynamically and weakly typed.

### Build-in Types

JavaScript has 7 build-in types:

* ```null```
* ```undefined```
* ```boolean```
* ```number```
* ```string```
* ```object```
* ```symbol``` (added in ES6)

All of them ecxept object are primitives types, and object is referal type.

Primitives types operates by value, when referals by link. So, when you pass 
primitive as function argument function will get a new instance of primitive and all modifications on it wouldn't change the initial value. In case of object, you will modify exactly the initial value.

### How to check data type in JS

Typeof
