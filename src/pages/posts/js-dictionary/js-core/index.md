---
path: /js-dictionary/js-core
title: 📙 JavaScript Dictionary
metaTitle: JavaScript Dictionary
metaDescription: JavaScript Dictionary | place with explanations for each buzzword in the JS world
metaKeywords: 'javascript, html5, canvas'
wrapperClass: dictionary
---

Place with explanations for each buzzword in the JS world.😀

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

# JS Core:

## A:

#### ```Array```

Basic composing data type. *More on in* [```Complete guide to Arrays```](/posts/arrays-in-javascript-complete-guide).

#### ```Abstract Equality```
Comparison operator (```x == y```, where x and y are values, produces ```true``` or ```false```).

<details>
  <summary>🔎 rules table ... </summary>

Condition                                | Return                     | Example                     | Result    |
:----------------------------------------|:---------------------------|:----------------------------|:----------|
1. ```type(x)``` equals to ```type(y)``` | ```x === y```              |```{} == {}```               |```false```|
-                                        |                            |```[] == {}```               |```false```|
-                                        |                            |```[] == []```               |```false```|
2. ```null``` with ```undefined```       | ```true```                 |```null == undefined```      |```true``` |
-                                        |                            |```undefined == null```      |```true``` |
3. ```Number``` with ```String```        | ```x == toNumber(y)```     |```4 == '3'```               |```false```|
-                                        |                            |```'4' == 3```               |```false```|
4. ```x is Boolean```                    | ```toNumber(x) == y```     |```true == 1```              |```true``` |
-                                        |                            |```true == 2```              |```false```|
-                                        |                            |```2 == true```              |```false```|
5. ```Str/Num/Symb``` with ```Obj```     | ```x == toPrimitive(x)```  |```1 == {}```                |```false```|
-                                        |                            |```[] == 0```                |```true``` |
-                                        |                            |```{} == '[object Object]'```|```true``` |
</details>

*More on in* ```ECMA-262``` [```7.2.12 Abstract Equality Comparison```](http://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison).


#### ```AJAX```

#### ```Arrow Functions```

<!-- ## B: -->

## C:

#### ```Call stack```
A stack data structure that keeps information about active function call.

#### ```Cast```

Explicit conversion a value from one [```data type```](#data-type) to another: ```String(42)```.

#### ```Coercion```

Implicit conversion a value from one [```data type```](#data-type) to another: ```42 + ''```. *Related terms*: [```weak typing```](#weak-typing).

<details>
  <summary>🔎 coercion rules ... </summary>

  Operator ```+``` becomes a concatenation in the follows cases:
  
  1. ```String``` with ```String```:

  ```js
  '1' + '1' // '11'
  ```

  2. ```String``` with any other type (except [```symbol```](#symbol)):

  ```js
  1 + '2' // '12'
  '2' + 1 // '21'

  true + '_foo' // 'true_foo'
  ```

  3. ```Object``` with any other type (except [```symbol```](#symbol)):

  ```js
  [] + {} // '[object Object]'
  [] + true // 'true'
  [1, 2] + [3] // '1,23'

  // !gotchas, here {} is empty block instead of object
  {} + [] // 0
  ```

  In other cases ```+``` returns ```number```:

  ```js
  2 + true // 3
  true + true // 2
  ```

  Operators ```-```, ```*```, ```/``` always return ```number```:

  ```js
  '1' * '2' // 2
  [2] * [3] // 6
  [2] * true // 6
  true * false // 0
  'foo' * true // NaN
  5 * { valueOf: () => 5 } // 25
  5 * { toString: () => '7' } // 35
  5 * { valueOf: () => 5, toString: () => '7' } // 25
  ```
</details>

## D:

#### ```Data type```
Abstraction that has a bounded set of available values and operations that can be performed on these values.

#### ```Dynamic typing```

Means that variable can represents any value of any type. *Related terms*: [```Duck typing```](#duck-typing), [```Weak typing```](#weak-typing).

#### ```Duck typing```
General term for "type checks" that make assumptions about a value's "type"
based on its shape (what properties are present).
"If it looks like a duck, and quacks like a duck, it must be a duck". *Related terms*: [```Dynamic typing```](#dynamic-typing), [```Weak typing```](#weak-typing).


## E:

#### ```Event loop```
The mechanism that performs moving functions from the ```event queue``` to [```call stack```](#call-stack) when it becomes empty. *Read more about* [```Event loop in JS```](/posts/event-loop-in-javascript).

## F:

#### ```First-class Function```

Functions are treated as values – you can assign a function into a variable, pass it around etc. *Related terms*: [```higher-order function```](#higher-order-function).

## G:

#### ```Generator```

Function that can be paused in mid-completion with saving inner state ([example](/posts/generators-in-javascript#generator)). 


## H:

#### ```Higher-order Function```

A function that takes a function as an argument, or returns a function. *Related terms*: [```first-class function```](#first-class-function).

#### ```Hoisting```
Moving all declarations to their respective scopes.


## I:

#### ```Introspection```

The ability of a program to examine the type or properties of an object at runtime. *Read more in the* [```Complete Guide to Objects```](/posts/objects-in-javascript-complete-guide#introspection-in-js).

#### ```Iterable```

An [```object```](#object) that contains an [```iterator```](#iterator) that can iterate over its values ([example](/posts/iterators-in-javascript#iterable)).

<details>
  <summary>🔎 example of Iterable ...</summary>

```js
const iterable = {
  [Symbol.iterator]() {
    let counter = 0
    const iterator = {
      next() {
        return {
          value: counter++,
          done: counter > 5,
        }
      },
    }
    return iterator
  }
}

for (const step of iterable) {
  console.log(step)
}

// 0
// 1
// ...
```
</details>

<details>
  <summary>🔎 example of async Iterable ...</summary>

```js
const iterable = {
  [Symbol.asyncIterator]() {
    let counter = 0
    const iterator = {
      async next() {
        return {
          value: counter++,
          done: counter > 5,
        }
      },
    }
    return iterator
  }
}

;(async () => {
  for await (const step of iterable) {
    console.log(step)
  }
})()

// 0
// ...
```
</details>

<details>
  <summary>🔎 example of Iterable & Iterator at the same time ...</summary>

```js
let counter = 0
const iterable = {
  [Symbol.iterator]() { return this },
  next: () => {
    return {
      done: counter > 5,
      value:  counter++,
    }
  }
}

console.log(...iterable) // 0 1 2 3 4 5
```
</details>

#### ```Iterator```

An [```object```](#object) that has the ```next(..)``` method on its interface.

<details>
  <summary>🔎 example of Iterator ...</summary>

```js
const iterator = {
  counter: 0,
  next() {
    return {
      value: this.counter++,
      done: this.counter > 5,
    }
  },
}

const step1 = iterator.next() // { value: 0, done: false }
const step2 = iterator.next() // { value: 1, done: false }
```

</details>

<details>
  <summary>🔎 example of async Iterator ...</summary>

```js
const asyncIterator = {
  counter: 0,
  async next() {
    return {
      value: this.counter++,
      done: this.counter > 5,
    }
  },
}

const step1 = asyncIterator.next() // Promise
const step2 = asyncIterator.next() // Promise
```

</details>

## J:

#### ```JSON```

#### ```JSON-safe```
JSON-safe values consist of values that can be represented as JSON.
Not JSON-safe: ```undefined```s, ```function```s, ```symbol```s, ```object```s with circular references, ```Date```s, ```Infinity```, ```RegExp```s, ```Map```s, ```Set```s, ```Blob```s, ```FileList```s, sparse ```Array```s, ```Typed Array```s or other complex types.

<!-- ## K: -->

## L:

#### ```Lexical scope```
[```Scope```](#scope) that defined during the lexing time.

#### ```Let```

#### ```Localstorage```

## M:

#### ```Map```

## N:

#### ```Number```

Numeric data type, that represents both integer and fractional numbers. *Read more in the* [```Complete Guide to Numbers```](/posts/numbers-in-javascript-complete-guide).

## O:

#### ```Object```

Basic data type. *More on in* [```Complete Guide to Objects```](/posts/objects-in-javascript-complete-guide).


## P:

#### ```Promise```

#### ```Proxy```

ES6 feature that allows boxing software component with an interception of component handlers, like getting/setting/deleting/enumeration object properties, applying arguments to functions, etc.

<!-- ## Q: -->

## R:

#### ```Reflect```

#### ```Reflection```

The ability for a program to manipulate the values, meta-data, properties and/or functions of an object at runtime.

#### ```Regular Expressions```


## S:

#### ```Scope```
The accessibility of objects (variables/functions) in some part of your program.

#### ```Set```

#### ```Symbol```

New data type offered by ES6, a unique identifier for special object properties.

#### ```Stack frame```
Block of the [```stack```](#call-stack) corresponds to some function call that keeps relative information about this call (local variables, parameters, a location where to be returned).

## T:

#### ```TCO```
*Tail Call Optimization*. *Read more about* [```Tail call optimization in JavaScript```](/posts/tail-call-optimization-in-javascript).


<!-- ## U: -->
<!-- ## V: -->

## W:

#### ```Weak typing```
Means that compiler can use [```coercion```](#coercion). *Related terms*: [```dynamic typing```](#dynamic-typing), [```duck typing```](#duck-typing).

#### ```WeakMap```

#### ```WeakSet```

<!-- ## X: -->
<!-- ## Y: -->
<!-- ## Z: -->

<br/>
<br/>
