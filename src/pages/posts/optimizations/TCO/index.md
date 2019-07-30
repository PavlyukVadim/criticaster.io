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

Tail call optimization is a special way of optimization the number of stack frames in mostly functional languages. In JavaScript TCO support starts with ES6. (At least ES6 offers to use TCO, browser support still is pure).

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

Firstly, will be created a [stack frame](/js-dictionary#stack-frame) for the global variables (foo, bar).
After that, will be created a stack frame for the bar function with local variable a and parameter b. And the last one - stack frame for the foo function. (global => bar => foo). The reason in tail call optimization is that the compiler can skip creatin a new stack frame (global => bar) and make a call in the existed stack frame (!when function returns the call of function, even the same function). It a great optimization of using a RAM, and can solve a problem with a maximum call stack size for recursion functions.

### What is tail recursion

As you can gues tail call optimization is a powerful tool for the functional languages. Profit of it is more obvious with applying it to the recurtion.
Actually, exactly the recurtional functions mostly are the source of the problems with a maximum call stack size. Let's use our recurtional way of the getting factoril and play around it to change it to the tail recursion:

```js:title=Not tail recursion function
const factorial = x => (x === 1) ? 1 : x * factorial(x - 1)
```

Why it isn't the tail call?
The point in the last expression inside the ternany operator.
In the other words it looks like:

```js:title=Not tail recursion function
const factorial = x => {
  if (x === 1) return 1
  const f = factorial(x - 1) 
  return x * f
}
```

So our function doesn't return a call of function and it can't be optimized.
As we mention in the post about factorial the stack calls looks like:

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

Let's update our function to use 

### Conclusions

So, we've written a function for calculation recursion in javascript. Also, we've considered how the call stack works with the recursion.
