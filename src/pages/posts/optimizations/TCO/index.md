---
path: /posts/tail-call-optimization-in-javascript
date: '2019-07-30'
title: Tail call optimization in javascript
category: optimizations
metaTitle: Tail call optimization in javascript
metaDescription: Tail call optimization in javascript
metaKeywords: 'javascript, js, algorithms, tail call optimization, TCO, ES6'
hidden: true
---

Tail call optimization is a special way of optimization the call stack in mostly functional languages. In JavaScript TCO support starts with ES6. (At least ES6 offers to use TCO, browser support still is pure).

### How tail call optimization works

At the first, let's defaine what is the tail call, and how it can be optimized.

Let's consider the following functions:

```js
function foo(a) { return a }
function bar(b) {
  const a = b * 12
  return foo(a)
}
```

What will be done when we call the bar function:

```js
function foo(a) { return a }
function bar(b) {
  const a = b * 12
  return foo(a) // 2
}
bar(5) // 1
```

Firstly, will be created a stack frame for the global variables (foo, bar).
After that, will be created a stack frame for the bar function with a 







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
