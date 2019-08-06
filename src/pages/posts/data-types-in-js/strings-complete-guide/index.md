---
path: /posts/strings-in-javascript-complete-guide
date: '2019-08-04'
title: 📝 Complete guide to Strings in JavaScript
category: data-types-in-js
metaTitle: Complete guide to Strings in JS
metaDescription: Complete guide to Strings in JS
metaKeywords: 'javascript, js, strings'
---

## Table of content:

* [Introduction to Strings](#introduction-to-strings)
* [How to convert String into Array](#how-to-convert-string-into-array)
* [How to conver Array into String](#how-to-conver-array-into-string)
* [How to repeat String n times](#how-to-repeat-string-n-times)
* [How to get part of a String](#how-to-get-part-of-a-string)
* [How to reverse a String](#how-to-reverse-a-string)

Advanced section:

* [About Strings at a low level](#about-strings-at-a-low-level)
* [Unicode/UTF-X terminology brief overview](#unicodeutf-x-terminology-brief-overview)
* [How to get code of Сhar](#how-to-get-code-of-сhar)
* [How to get Сhar from code](#how-to-get-сhar-from-code)

### Introduction to Strings

If you have experience with other programming languages you know basic information (that strings in basically are a sequence of characters) about strings. Let's look at strings via JavaScript prisma.

At first view, strings a very similar to arrays (both of them has length property, accsess to elements by index, and many of the same methods):

```js
const str = 'foo'
console.log(str.length) // 3
console.log(str[0]) // 'f'
console.log(str.concat('bar')) // 'foobar'
```

So is they a really just an array of characters?
Actually, nope, the big difference is how they work underhood, a javascript string is immutable, while arrays are mutable. What does it means? When you make any changes over strings it creates a new string instead of changing the previous (many arrays methods work in mutable mode):

```js
const str = 'foo'
// will create a new instance of a string
console.log(str.repeat(2)) // 'foofoo'
console.log(str) // 'foo'
```

### How to convert String into Array

Use split method to convert string into array by some separator:

```js
const str = 'foo bar baz'
str.split(' ') // ['foo', 'bar', 'baz']
```

To split by each symbol you can pass a empty string as method argument:

```js
const str = 'foo'
str.split('') // ['f', 'o', 'o']
```

Also, you can call method as tag function:

```js
const str = 'foo'
str.split`` // ['f', 'o', 'o']
```

### How to conver Array into String

The oposite method is join:

```js
const arr = ['foo', 'bar', 'baz']
arr.join(' ') // 'foo bar baz'
```

### How to repeat String n times

In the past, there're a few ways by generation empty arrays and joining them with a target string, but ES6 offers repeat method as a more elegant way for repeating a string:

```js
'hi!'.repeat(3) // 'hi!hi!hi!'
```

### How to get part of a String

For getting some part of string you can use a slice method. It has a interesting modes (direction from string start or end) depanding on arguments:

```js
'abcde'.slice(1) // 'bcde'
'abcde'.slice(0, 2) // 'ab'
'abcde'.slice(0, -1) // 'abcd'
'abcde'.slice(-3, -1) // 'cd'
'abcde'.slice(-3) // 'cde'
```

### How to reverse a String

It's a so common interview question. The most easier way it's using a array reverse method (strings don't have this method):

```js
'abcde'.split('').reverse().join('') // edcba
```

## Advanced section:

### About Strings at a low level

As we mentioned before, string is a sequence of elements (actually we called them 'characters'), but which physical properties does this sequence of elements have?

Elements are just 16-bit unsigned integer values (each element is a ```UTF-16``` code point, see below info about Unicode). The maximum length of the string is ```2^53-1``` elements.

##### Unicode/UTF-X terminology brief overview:

* ```Unicode``` - Universal Coded Character Set
* ```UTF-16``` - Unicode Standard, that uses 16-bits for each code unit
* ```Code unit``` - part of code point
* ```Code point``` - an atomic unit of information (in simple words - symbol, that consists of one or more code units). In ```UTF-16``` each code point represented by 1 or 2 code unit.

### How to get code of Сhar

Each element is 16-bit integer, but how to get that value? Old good method is charCodeAt:

```js
'A'.charCodeAt(0) // 65
'B'.charCodeAt(0) // 66
'a'.charCodeAt(0) // 97
```

But it works only to ```0x10000``` (65,536) while avaliable values are ranged from ```0x0``` to ```0x10FFFF``` (1,114,111). And to handle values above that limit (like emoji) you have to play around pair of values (code units, aka a surrogate pairs). And actually all built-in string methods/properties work with code units:

```js
'😜'.length // 2
'😜'.split('') // ['�', '�']
'😜'.split('').map((u) => u.charCodeAt(0)) // [55357, 56860]
```

To handle these methods in the context of pairs of code units you have to write custom functions or use some libraries (we're skipping that part). But, there're good news. ES6 offers some of these methods. One of them ```codePointAt``` that returns an integer, that epresents ```UTF-16``` code:

```js
'😜'.charCodeAt(0) // 55357, wrong (only a first unit)
'😜'.codePointAt(0) // 128540, correct
```

### How to get Сhar from code

The opposite action is getting a char element from code. And here are two ways, too. ```String.fromCharCode``` works with limited range of values (subset of most popular unicode symbols), and ```String.fromCodePoint``` that works opposite to ```String.prototype.codePointAt```:

```js
String.fromCharCode(65) // 'A'
String.fromCharCode(65, 97) // 'Aa'

String.fromCharCode(55357, 56860) // '😜'
String.fromCodePoint(128540) // '😜'
```
