---
path: /posts/how-to-repeat-string-n-times-in-javascript
date: '2019-05-07'
title: How to repeat string n times in JavaScript
category: nope
metaTitle: How to repeat string n times in JavaScript
metaDescription: How to repeat string n times in JavaScript using the standard method from String Prototype from ES6
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials, repeat'
featured: true
---

Our task is to repeat string n times in javascript. There are lots of solutions. Some of them that have become traditional can be replaced by more elegant and optimized from the engine side. So let's consider them, and make a decision about what to use nowadays.

Parameters:

* str - string template, that we have to copy
* n - number of repeating


### Standard solution

The easiest way to repeat a string it's accumulation a template of string inside of any type of loop. Sound good? You could use usual ```for``` loop, like: 

```js:title=index.js
const repeat = (str, n) => {
  let resultStr = ''
  for(let i = 0; i < n; i++) {
    resultStr += str
  }
  return resultStr
}
repeat('Hi', 3) // 'HiHiHi'
```

Or any other kinds of a loop are to your service.

### Deprecated solution

There is some solution, that became very popular for this task, maybe even traditional, it's using an ```array``` of length equal to a number of repeating and the ```join``` method with the template as an argument:

```js:title=index.js
const repeat = (str, n) => {
  if (n < 0) return ''
  return new Array(n + 1).join(str)
}
repeat('Hi', 3) // 'HiHiHi'
```

It's working approach, it less than the previous one, but isn't so clear and it uses more memory for creating additional data structure (```array```) ...

## Single-line solution

Let's use for repeating the native solution from ES6. It's method from ```String Prototype```:

```js:title=Single-line solution
const repeat = (s, n) => n > 0 ? s.repeat(n) : ''
```

Example of using:

```js
repeat('Hi') // 'HiHiHi'
```

Looks better, isn't it?

### Explanation

We've used the built-in method 'repeat' from String Prototype, that was added in EcmaScript6. It's a more clear and optimized way to solve this task. Also, we've used a ternary operator to check if n is a positive number.

### Conclusions

So, we've done the task of repeating a string using javascript. We've compared different ways to solve it, using a traditional approach, way with creating the array and modern ES6 solution, that is more elegant and optimized.
