---
path: /posts/how-to-find-factorial-of-number-in-javascript
date: '2019-05-13'
title: How to find factorial of a number in javascript
category: nope
metaTitle: How to find factorial of a number in javascript
metaDescription: How to find factorial of a number in javascript using recursion
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials, factorial, recursion'
featured: true
hidden: true
---

Finding a factorial is one of the most popular tasks for demonstrating how recursion works, regardless on programming language. And JavaScript, isn't an exception. Also, it's one of the esiest algorithms, that might be asked on interview for a entry position. So, finding a factorial of a number is your first step on the way to to mastering a recursion. Let’s get started.

### Standard solution

Of course, you can implement it without recursion, i’ll show you a solution with loop for comparing:

```js:title=index.js
const factorial = (num) => {
  let value = 1
  for (let i = 2; i <= num; i++) {
    value = value * i
  }
  return value
}

factorial(5) // 120
```

Great. Go to the recursion version.

## Single-line solution
For use the second way we have to transform our string into an array, where each cell, will be a single character. After using ```reverse``` we have to convert them back into a string using ```join```.

```js:title=Single-line solution
const factorial = x => (x === 0) ? 1 : x * factorial(x - 1)
```

Example of use:

```js
factorial(5) // 120
```

### Explanation

The traditional way of transforming a string into an array is using the ```split``` method:

```js:title=split
'abc'.split('') // ['a', 'b', 'c']
```

But also we can use the ```spread operator```, that is more stylish and elegant. After that, we used an array method to changing elements positions into the opposite order and join them together. You can wonder how we've called the ```join``` method (```join`` ```). It's calling the method as ```tag function```, that returns ```template literals``` (``` `sample of template literal with ${arg}` ```). You can replace it with ```join('')```. From my point of view, the previous way looks better, however, might seems like overkill.

### Conclusions

So, we've done the task with reversing a string using javascript. Also, we've compared the basic solution with a more elegant way. Additionally, we've considered ways of transforming a string into an array, and introduced into calling methods in ```tag function``` mode.
