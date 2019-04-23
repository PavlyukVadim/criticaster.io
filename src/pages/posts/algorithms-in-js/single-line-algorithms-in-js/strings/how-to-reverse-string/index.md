---
path: /posts/how-to-reverse-string-in-javascript
date: '2019-04-21'
title: How to reverse a string in JavaScript
category: nope
metaTitle: How to reverse a string in JavaScript
metaDescription: How to reverse a string in JavaScript
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials'
featured: true
---

Our tast is to reverse a string in javascript. JavaScript has powerfull build-in set of methods on the String prototype for working with string, but there no reverse method. Let's go around without it:

### Basic solution

These solution is basic because it's the direct way to work with string as set of characters. It's similar to way how to do it in traditionaly prorgamming languages:

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

So we implemented reverse function by themself, but can we use the same method from Array prototype?

## Single-line solution
For use the second way we have to transform our string into array, where each cell, will be a single charecter. After using reverse we have convert them back into a string using join.

```js:title=single-line solution
const reverse = s => [...s].reverse().join``
```

Using exapmle:

```js
reverse('abc') // 'bca'
```

### Explanation

Traditional way of transforming string into array is using split method:

```js:title=split
'abc'.split('') // ['a', 'b', 'c']
```

But also we can use spread operator, that is more stylish and elegant. After that we used array method to changing elements order in oposide and join them together. You can wonder how we called join method (join\`\`). It's calling the method as TAG FUNCTION, that returns Template Literals (\`\`). You can replace it with join(''), but from my point of view the previous way looks better.

### Concusions

So, we done task with string reversing using javascript, compared the basic solution with more elegand way. Additioanally, we've considered ways of transforming string into array, and introduced into calling methods as TAG FUNCTION.
