---
path: /posts/how-to-remove-duplicates-from-string-in-javascript
date: '2019-04-24'
title: How to remove duplicates from a string in JavaScript
category: nope
metaTitle: How to remove duplicates from a string in JavaScript
metaDescription: How to remove duplicates from a string in JavaScript using Set object and the spread operator
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials, duplicates'
featured: true
---

Our task is to remove all duplicated characters from a string in JavaScript.
For example, if a given string is "Hello world", the program should return just "Helo wrd".

### Standard solution

The standard solution how to remove duplicates is to iterate string through each symbol and store into a new string all symbols that aren't included in these new string. You can find the solution below. Actually, no extra/interesting ideas, but it works well.

```js
const unique = (str) => {
  let resultStr = ''
  for(let i = 0; i < str.length; i++) {
    if (!resultStr.includes(str[i])) {
      resultStr += str[i]
    }
  }
  return resultStr
}
unique('abbccc') // 'abc'
```

Go further to a more elegant solution ...

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
