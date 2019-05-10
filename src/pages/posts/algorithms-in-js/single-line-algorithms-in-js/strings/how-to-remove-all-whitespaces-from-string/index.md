---
path: /posts/how-to-remove-all-whitespaces-from-string-in-javascript
date: '2019-05-10'
title: How to remove all whitespaces from a string in JavaScript
category: nope
metaTitle: How to remove all whitespaces from a string in JavaScript
metaDescription: How to remove all whitespaces from a string in JavaScript using replace
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials, remove whitespaces, regexp'
featured: true
---

Removing some characters from the string is one of the easiest and the most popular tasks with strings in javascript. Moreover, removing whitespaces from a string is even more popular than other symbols.
So, let's consider ways how to get rid of whitespaces in a string.
There are lots of solutions for this purpose. For removing whitespaces from the start of the string or at the end you can use the ```trim``` method, that has been added in ```ES5.1``` at ```string prototype```.
But for removing symbols from the middle of string we have to find another way.

### Standard solution

Of course, you can iterate through each character of a string and separate non-whitespace symbols in a new string, which you'll return as a result:

```js
const noSpaces = (str) => {
  let resultStr = ''
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      resultStr += str[i]
    }
  }
  return resultStr
}
noSpaces('  foo  ') // 'foo'
```

It's the most direct solution, using the minimum of language capability. Fortunately, javascript has a powerful functionality of working with ```strings``` and ```arrays```. Let's apply them to our task:

### Using an array filter

You can achieve your goal by converting a string into an array, that'll be filtered and joined into the result string:

```js
const noSpaces = (str) => {
  return str.split``.filter(e => (e !== ' ')).join``
}
noSpaces('  foo  ') // 'foo'
```

It's working approach, that looks better than the previous one, but let's consider the ```replace``` method:

## Single-line solution using replace

There is a powerful method for replacing parts of a string using a ```regular expression``` on other strings. How can we use that? Let's replace all space symbols on an empty string. To do that we need regular expression, that will match every space symbol. Regular expressions have ```shorthand character classes```, ```\s``` stands for a space character. For matching all space characters, we have to add a ```global flag``` to our expression. So, the result of regexp will ```/\s/g```. Now, we can use the ```replace``` method:

```js:title=Single-line solution
const noSpaces = (str) => str.replace(/\s/g, e => '')
```

Example of use:

```js
noSpaces(' foo bar baz ') // 'foobarbaz'
```

### Conclusions

We have solved the task with removing whitespaces from a string in JavaScript. We've considered a straightforward solution, approach using array filtering, and way with ```replace``` method, that was the most suitable and flexible for that problem.
Thanks for reading.
