---
path: /posts/how-to-reverse-string-in-javascript
date: '2019-04-21'
title: How to reverse a string in JavaScript
category: nope
metaTitle: How to reverse a string in JavaScript
metaDescription: How to reverse a string in JavaScript using the reverse method from Array prototype
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials'
featured: true
---

Our task is to reverse a string in javascript. JavaScript has a powerful built-in set of methods on the String ```prototype``` for working with strings, but there no the ```reverse``` method. However, let's go ahead:

### Standard solution

This solution is standard because it’s the direct way to work with string as a set of characters. It’s similar to the way how to do it in traditional programming languages:

```js:title=index.js
const reverse = (str) => {
  let seversedStr = ''
  for(let i = str.length - 1; i >= 0; i--) {
    seversedStr += str[i]
  }
  return seversedStr
}
reverse('abc') // 'bca'
```

So we implemented reverse function by themselves, but we can cheat using the same method from Array ```prototype``` ...

## Single-line solution
For use the second way we have to transform our string into an array, where each cell, will be a single character. After using ```reverse``` we have to convert them back into a string using ```join```.

```js:title=Single-line solution
const reverse = s => [...s].reverse().join``
```

Example of use:

```js
reverse('abc') // 'bca'
```

### Explanation

The traditional way of transforming a string into an array is using the ```split``` method:

```js:title=split
'abc'.split('') // ['a', 'b', 'c']
```

But also we can use the ```spread operator```, that is more stylish and elegant. After that, we used an array method to changing elements positions into the opposite order and join them together. You can wonder how we've called the ```join``` method (```join`` ```). It's calling the method as ```tag function```, that returns ```template literals``` (``` `sample of template literal with ${arg}` ```). You can replace it with ```join('')```. From my point of view, the previous way looks better, however, might seems like overkill.

### Conclusions

So, we've done the task with reversing a string using javascript. Also, we've compared the basic solution with a more elegant way. Additionally, we've considered ways of transforming a string into an array, and introduced into calling methods in ```tag function``` mode.
