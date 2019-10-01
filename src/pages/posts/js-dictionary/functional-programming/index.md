---
path: /js-dictionary/functional-programming
title: 📙 JavaScript Dictionary
metaTitle: JavaScript Dictionary
metaDescription: JavaScript Dictionary | place with explanations for each buzzword in the JS world
metaKeywords: 'javascript, html5, canvas'
wrapperClass: dictionary
---

Place with explanations for each buzzword in the JS world.😀

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

# Functional programming:

## A:

#### ```Arrow Functions```

## B:

## C:

#### ```Composition```

Is a concept that allows you to combine two or more functions into a new function. Composition has a companion concept ```Piping```. ```Pipe``` also composes functions, but in reverse order.

<details>
  <summary>Code sample:</summary>

```js
const compose = (...fns) => (x) => fns.reduceRight((x, fn) => fn(x), x)

// Usage
const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1)
const upperCapital = s => s.split(' ').map(upperFirst).join(' ')
const lower = s => s.toLowerCase()

const capitalize = compose(upperCapital, lower)

const s = 'FOO BAR'
capitalize(s) // Foo Bar
```
</details>


#### ```Currying```

Is a technique of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Can be implemented using ```Partial application```.

<details>
  <summary>Code sample:</summary>

```js
const curry = fn => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args)
    return curry(f)
  } else {
    return fn(...args)
  }
}
```  
</details>


## D:

## E:

## F:

#### ```First-class Function```

Functions are treated as values – you can assign a function into a variable, pass it around etc. Read also: [Higher-order Function](#higher-order-function).

## G:

## H:

#### ```Higher-order Function```

A function that takes a function as an argument, or returns a function. Read also: [First-class Function](#first-class-function).

## I:

#### ```Immutable Data```

## J:

## K:

## L:

## M:

#### ```Mixins```

#### ```Memoization```

An optimization technique by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## N:

## O:

## P:

#### ```Partial application```

Is a technique of fixing a number of arguments to a function, producing another function of smaller arguments i.e binding values of those arguments. Example: ```function.bind(null, [arg1], ...)```.

#### ```Piping```

Is a concept that allows you to combine two or more functions into a new function.

<details>
  <summary>Code sample:</summary>

```js
const pipe = (...fns) => (x) => fns.reduce((x, fn) => fn(x), x)

// Usage
const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1)
const upperCapital = s => s.split(' ').map(upperFirst).join(' ')
const lower = s => s.toLowerCase()

const capitalize = pipe(lower, upperCapital)

const s = 'FOO BAR'
capitalize(s) // Foo Bar
```
</details>

#### ```Pure Function```

## Q:

## R:

## S:

## T:

## U:

## V:

## W:

#### ```Wrapper```

A function that wraps a function by adding new behaviour.
<details>
  <summary>Example of Cancelable wrapper</summary>

```js
const cancelable = fn => {
  const wrapper = (...args) => {
    if (fn) return fn(...args);
  }
  wrapper.cancel = () => fn = null
  return wrapper
}

// ...
const f = cancelable(fn);

f() // called
f.cancel()
f() // ignored
```
</details>

## X:
## Y:
## Z: