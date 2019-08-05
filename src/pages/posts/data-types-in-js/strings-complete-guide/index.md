---
path: /posts/strings-in-javascript-complete-guide
date: '2019-08-04'
title: 📝 Complete guide to Strings in JavaScript
category: data-types-in-js
metaTitle: Complete guide to Strings in JS
metaDescription: Complete guide to Strings in JS
metaKeywords: 'javascript, js, strings'
hidden: true
---

## Table of content:

* [Introduction to String](#)
* [About Strings at low level](#)

Advanced section:

### Introduction to String

If you have an experience with other programming languages you know basic information (that strings are sequence of charakters) about strings. Let's loot at strings via JavaScript prisma.

At first point strings a very similar (both of them has length property, accsess to elements by index, and lots of the same methods)to arrays:

```js
const str = 'foo'
console.log(str.length) // 3
console.log(str[0]) // 'f'
console.log(str.concat('bar')) // 'foobar'
```

So is they a really just an arrays of characters?
Actually, nope, the big difference is underhood, javasript string is immutable, while arrays is mutable. What does it means? When you make any changes over strings it create a new string instead of change the previous (with arrays many methods in mutable mode):

```js
const str = 'foo'
// will create a new instance of string
console.log(str.repeat(2)) // 'foofoo'
console.log(str) // 'foo'
```

### How to convert String into array:

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

Also, you can call meathod as tag function:

```js
const str = 'foo'
str.split`` // ['f', 'o', 'o']
```

### How to Array into String:

The oposite method is join:

```js
const arr = ['foo', 'bar', 'baz']
arr.join(' ') // 'foo bar baz'
```

### How to repeat string

In the past there were a few ways around generation empty arrays and joining them with a target string, but ES6 offers reapeat meathod as more elegant way for repeating a string:

```js
'hi!'.repeat(3) // 'hi!hi!hi!'
```

### How to get part of string

For getting some part of string you can use a slice method. It has a interesting modes (direction of getting eighter from start or end) due to arguments:

```js
'abcde'.slice(1) // 'bcde'
'abcde'.slice(0, 2) // 'ab'
'abcde'.slice(0, -1) // 'abcd'
'abcde'.slice(-3, -1) // 'cd'
'abcde'.slice(-3) // 'cde'
```

### How to reverse a string

It's a so common question for interviews. The mose easier way it's using a array reverse method (strings don't have this method):

```js
'abcde'.split('').reverse().join('') // edcba
```

Advanced section:

### About Strings at low level

As we mentioned before string is a sequence of elements (actually we called them 'characters'), but what phisical propereties have that sequence and elements?

Elements is just a 16-bit unsigned integer values (each element is a single UTF-16 code unit). Maximum length of the string is 2^53-1 elements.

### How to get code at char

### Working with emojji
