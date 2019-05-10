---
path: /posts/how-to-remove-all-whitespaces-from-string-in-javascript
date: '2019-05-10'
title: How to remove all whitespaces from string in JavaScript
category: nope
metaTitle: How to remove all whitespaces from string in JavaScript
metaDescription: How to remove all whitespaces from string in JavaScript using replace
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials, remove whitespaces, regexp'
featured: true
hidden: true
---

Removing some characters from string is one of the esiest and the most popular tasks with strings in javascript. Moreover, revoming whitespaces from string is event more popular than othes symbols.
So, let's consider ways how to get rid of whitespaces in string.
There are a lots solutions for this purpose. For removing whitespaces from the start of string or at the end you can use the trim method, that has been added in ES5.1 at string prototype.
But for removing symbols from the middle of string we have to find another ways.

### Standard solution

Of course, you can interate throught each character of string and separate non-whitespace symbols in a new stirng, that you'll return as result:

```js
const noSpaced = (str) => {
  let resultStr = ''
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      resultStr += str[i]
    }
  }
  return resultStr
}
noSpaced('  foo  ') // 'foo'
```

It's the most direct solution, using the minimum of language capability. Fortunatly, javascript has a powerfull functionallity of working with strings and arrays. Let's apply them to our task.

### Standard solution

## Single-line solution

Which data structure does include only unique values? Yeap, the ```Set```. And with ```EcmaScript6``` we don't have to implement it by themselves. Let's use the ```Set``` constructor instead. And even better news, as far as 
The set takes an iterable parameter, we can pass our string directly into it. After that, we'll get a new ```Set object``` with unique symbols. So, at that step, we have to transform these object into an array to join them into the string.

There are several ways how to convert a Set object into an array:

- firstly, using ```Array.from```:

```js
const array = Array.from(mySet)
```

- Or more elegant way, using spreading the Set out in an array:

```js
const array = [...mySet]
```

As you guessed, we'll use the last one. Now, all we got to do is use the ```join``` method to transform an array into the string:

```js:title=Single-line solution
const unique = s => [...new Set(s)].join``
```

Example of use:

```js
unique('abbccc') // 'abc'
```

### Conclusions

We have sovled task with removing duplicates from a string in JavaScript. We've considered a standard solution, that can be implemented in most programming languages, without using additional data structures and special methods, and more elegant single-line solution, that requires using a ```Set object``` and ```spreading```. If you have ideas about other ways how to remove duplicated symbol - leave them below. Thanks for reading.
