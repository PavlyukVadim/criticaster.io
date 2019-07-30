---
path: /posts/tail-call-optimization-in-javascript
date: '2019-07-30'
title: ⏮️ Tail call optimization in JavaScript
category: optimizations
metaTitle: Tail call optimization in javascript
metaDescription: Tail call optimization in javascript
metaKeywords: 'javascript, js, algorithms, tail call optimization, TCO, ES6'
---

Tail call optimization is a special way of optimization the number of stack frames in most functional languages. In JavaScript, TCO support starts from ES6. (At least ES6 offers to use TCO, browsers support still is pure).

### How tail call optimization works

At first, let's define what is the tail call, and how it can be optimized.

Let's consider the following code:

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

Firstly, will be created a [stack frame](/js-dictionary#stack-frame) for the global variables (```foo```, ```bar```).
After that, will be created a stack frame for the bar function with local variable a and parameter b. And the last one - stack frame for the foo function. (```global => bar => foo```). The reason in tail call optimization is that the compiler can skip creating a new stack frame (```global => bar```) and make a call in the existed stack frame (!when a function returns the call of a function, even the same function). It a great optimization of using a RAM, and it can solve a problem with a maximum call stack size for recursive functions.

### What is tail recursion

As you can guess tail call optimization is a powerful tool for the functional languages. Profit of it is more obvious with applying it to the recursion.
Actually, exactly the recursive functions mostly are the source of the problems with using a huge (needless) number of stack frames.

Let's use our recursive way of the getting factorial and play around it to change it to the tail recursion:

```js:title=Not tail recursion function
const factorial = x => (x === 1) ? 1 : x * factorial(x - 1)
```

Why it isn't the tail call?
The point in the last expression inside the ternary operator.
In the other words it looks like this:

```js:title=Not tail recursion function
const factorial = x => {
  if (x === 1) return 1
  const f = factorial(x - 1) 
  return x * f
}
```

So our function doesn't return a call of function and it can't be optimized.
As we mention in the post about factorial the stack trace looks like:

```js
factorial(5) =
  5 * factorial(4) =
  5 * (4 * factorial(3)) =
  5 * (4 * (3 * factorial(2))) =
  5 * (4 * (3 * (2 * factorial(1)))) =
  5 * (4 * (3 * (2 * (1)))) =
  5 * (4 * (3 * (2))) =
  5 * (4 * (6)) =
  5 * (24) =
  120
```

Let's update our function for applying TCO:

```js
const factorial = x => {
  const tailfactorial = (x, acc) => {
    return x >= 1 ? tailfactorial(x - 1, x * acc) : acc
  }
  return tailfactorial(x, 1)
}
```

In that case, stack trace looks like:

```js
factorial(5) =
  tailfactorial(5, 1) =
  tailfactorial(4, 5) =
  tailfactorial(3, 20) =
  tailfactorial(2, 60) =
  tailfactorial(1, 120) =
  20
```

And it means that an unbounded number of calls in tail position requires only a bounded amount of stack space.

### Conclusions

Tail call optimization is an important feature of functional languages. 
We've considered how to use it in JavaScript, and how to convert not a tail-recursive function into a tail-recursive that is especially useful for optimization purposes.
