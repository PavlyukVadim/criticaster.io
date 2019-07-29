---
path: /posts/how-to-find-factorial-of-number-in-javascript
date: '2019-05-13'
title: How to find factorial of a number in javascript
category: nope
metaTitle: How to find factorial of a number in javascript
metaDescription: How to find factorial of a number in javascript using recursion
metaKeywords: 'javascript, js, algorithms, single-line algorithms, tutorials, factorial, recursion, recurtion in javascript'
---

Finding a factorial is one of the most popular tasks for demonstrating how recursion works, regardless of programming language. And JavaScript isn't an exception. Also, it's one of the easiest algorithms, that might be asked on the interview for an entry position. So, finding factorial of a number is your first step on the way to mastering a recursion. Let’s get started.

### Standard solution

Of course, you can implement it without recursion, I'll show you a solution with loop for comparing:

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

Great. Let's go to the recursion version.

## Single-line solution
For use the second way the factorial function has to call itself with a decremented argument while the last goes to the ```1```.

```js:title=Single-line solution
const factorial = x => (x === 1) ? 1 : x * factorial(x - 1)
```

Example of use:

```js
factorial(5) // 120
```

### Explanation

As you can see our factorial function calls itself with decremented number value, it'll create a call stack of function calls that will close when the function calls with a ```1``` and returns a ```1``` as a result.

In other words, the call stack looks like:
```js
f(5) =
  5 * f(4) =
  5 * (4 * f(3)) =
  5 * (4 * (3 * f(2))) =
  5 * (4 * (3 * (2 * f(1)))) =
  5 * (4 * (3 * (2 * (1)))) =
  5 * (4 * (3 * (2))) =
  5 * (4 * (6)) =
  5 * (24) =
  120
```

### Conclusions

So, we've written a function for calculation recursion in javascript. Also, we've considered how the call stack works with the recursion.
