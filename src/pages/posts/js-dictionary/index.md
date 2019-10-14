---
path: /js-dictionary
title: 📙 JavaScript Dictionary
metaTitle: JavaScript Dictionary
metaDescription: JavaScript Dictionary | place with explanations for each buzzword in the JS world
metaKeywords: 'javascript, html5, canvas'
wrapperClass: dictionary
---

Place of explanations for each ```buzzword``` in the JS world.😀

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

## Categories:

1. [JS Core](/js-dictionary/js-core)
1. [Design Patterns](/js-dictionary/design-patterns)
1. [Architecture principles](/js-dictionary/architecture-principles)
1. [Functional programming](/js-dictionary/functional-programming)
<!-- 1. [Testing in JS]() -->

# Dictionary:
## A:

#### ```Array```

Basic composing data type.

*More on in* [```Complete guide to Arrays```](/posts/arrays-in-javascript-complete-guide)

#### ```AST```
*Abstract syntax tree*.

#### ```Abstract Equality```
Comparison operator (```x == y```, where x and y are values, produces ```true``` or ```false```):

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

*More on in* ```ECMA-262``` [```7.2.12 Abstract Equality Comparison```](http://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison)

#### ```Adapter```

A ```pattern``` for attainment compatibility that allows converting a class, function, or other components into the component with the interface we need.

#### ```AJAX```

#### ```Arrow Functions```

#### ```Authentication```
Who you are (```login``` + ```password```).

#### ```Authorization```
What you are allowed to do (```permissions```).


## B:

#### ```BDD```

*Behavior Driven Development*

## C:

#### ```Call stack```
A stack data structure that keeps information about active function call.

#### ```Cast```

Explicit conversion a value from one [```data type```](#data-type) to another (```String(42)```).

#### ```Closure```

#### ```Coercion```

Implicit conversion a value from one [```data type```](#data-type) to another (```42 + ''```):

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

*Related terms*: [```weak typing```](#weak-typing)

#### ```Cohesion```

#### ```Command```

A ```pattern``` that defines action and parameters as an object (like assuming a bank account transaction as an array of such objects, that objects often could be revoking).

#### ```Composition```

Is a concept that allows you to combine two or more functions into a new function:

<details>
  <summary>🔎 code sample ...</summary>

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

*Composition has a companion concept*: [```piping```](#piping)

#### ```Coupling```

#### ```Currying```

Is a technique of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Can be implemented using [```partial application```](#partial-application):

<details>
  <summary>🔎 code sample ...</summary>

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

#### ```Data Access Layer```

#### ```Data type```
Abstraction that has a bounded set of available values and operations that can be performed on these values.

#### ```Debouncing```

An optimization technique that enforces that a function not be called again until a certain amount of time has passed without it being called (execute this function only if N milliseconds have passed without it being called):

<details>
  <summary>🔎 debounce implementation ...</summary>

```js
const debounce = (delay, fn) => {
  let timeout
  return (...args) => {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      fn(...args)
    }, delay)
  }
}

const fn = arg => console.log('arg: ', arg)
const ft = debounce(200, fn)
setTimeout(() => ft('foo'), 50)
setTimeout(() => ft('foo'), 150)
setTimeout(() => console.log('bar'), 300)

// bar
// arg:  foo
```
</details>

*Related terms*: [```throttling```](#throttling)

#### ```Dependency Injection```

A form of [```IoC```](#inversion-of-control), where implementations are passed into an object through constructors/setters, which the object will 'depend' on in order to behave correctly.

#### ```Dynamic typing```

Means that variable can represents any value of any type.

*Related terms*: [```Duck typing```](#duck-typing), [```Weak typing```](#weak-typing)

#### ```Duck typing```
General term for "type checks" that make assumptions about a value's "type"
based on its shape (what properties are present).
"If it looks like a duck, and quacks like a duck, it must be a duck".

*Related terms*: [```Dynamic typing```](#dynamic-typing), [```Weak typing```](#weak-typing)


## E:

#### ```Event loop```
The mechanism that performs moving functions from the ```event queue``` to [```call stack```](#call-stack) when it becomes empty.

*Read more about* [```Event loop in JS```](/posts/event-loop-in-javascript)

## F:

#### ```Factory```

A ```pattern``` for producing function, object, other data structures.

#### ```Facade```

A ```pattern``` for hiding the complexity, it offers a common interface for controlling instances of different classes.

#### ```First-class Function```

Functions are treated as values – you can assign a function into a variable, pass it around etc.

*Related terms*: [```higher-order function```](#higher-order-function)

## G:

#### ```Generator```

Function that can be paused in mid-completion with saving inner state:

<details>
  <summary>🔎 example of Generator ...</summary>

```js
function *foo(a) {
  const sum = a + (yield)
  return sum
}

const it = foo(1)
// start
it.next()
// pass value instead of yield
const res = it.next(2) // { value: 3, done: true }
res.value // 3
```
</details>

<details>
  <summary>🔎 getting data from Generator ...</summary>

```js
function *foo(a) {
  const sum = a + (yield 'bar')
  return sum
}

const it = foo(1)
// start
const passedValue = it.next() // { value: 'bar', done: false }
// pass value instead of yield
const res = it.next(2) // { value: 3, done: true }
```
</details>

<details>
  <summary>🔎 generators for handling async code ...</summary>

```js
function *main() {
  try {
    const data = yield fetch('foo.bar')
    console.log(data)
  }
    catch (err) {
    console.error(err)
  }
}

const it = main()
const promise = it.next().value

promise
  .then((data) => it.next(data))
  .catch((err) => it.throw(err))
```
</details>

*Related terms*: [```iterator```](#iterator)

#### ```GRASP```


## H:

#### ```Higher-order Function```

A function that takes a function as an argument, or returns a function.

*Related terms*: [```first-class function```](#first-class-function)

#### ```Hoisting```
Moving all declarations to their respective scopes.


## I:

#### ```Immutable Data```

#### ```Inversion of control```

A programming principle by which the control of objects or portions of a program is transferred to a container or framework. 

#### ```Introspection```

The ability of a program to examine the type or properties of an object at runtime. 

*Read more in the* [```Complete Guide to Objects```](/posts/objects-in-javascript-complete-guide#introspection-in-js)

#### ```Iterable```

An [```object```](#object) that contains an [```iterator```](#iterator) that can iterate over its values:

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

An [```object```](#object) that has the ```next(..)``` method on its interface:

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

*Related terms*: [```generator```](#generator)

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

#### ```Meta Programming```

#### ```Mixins```

A form of object composition, where component features get mixed into a composite object: ```Object.assing(compositeObject, ..)```.

#### ```Memoization```

An optimization technique by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

#### ```Mock```
```Mocks``` or ```Fakes``` are faking certain modules or behaviors
to test different parts of a processes.

*Related terms*: [```spy```](#spy), [```stub```](#stub)

## N:

#### ```Number```

Numeric data type, that represents both integer and fractional numbers.

*Read more in the* [```Complete Guide to Numbers```](/posts/numbers-in-javascript-complete-guide)

## O:

#### ```Object```

Basic data type.

*More on in* [```Complete Guide to Objects```](/posts/objects-in-javascript-complete-guide)


## P:

#### ```Parasitic inheritance```

#### ```Partial application```

Is a technique of fixing a number of arguments to a function, producing another function of smaller arguments i.e binding values of those arguments. Example: ```function.bind(null, [arg1], ...)```.

#### ```Piping```

Is a concept that allows you to combine two or more functions into a new function:

<details>
  <summary>🔎 code sample ...</summary>

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

#### ```Programming paradigms```

#### ```Promise```

#### ```Proxy```

ES6 feature that allows boxing software component with an interception of component handlers, like getting/setting/deleting/enumeration object properties, applying arguments to functions, etc.

#### ```Pure Function```

A function where the return value is only determined by its input values, without [```side effects```](#side-effects).

<!-- ## Q: -->

## R:

#### ```Reflect```

#### ```Reflection```

The ability for a program to manipulate the values, meta-data, properties and/or functions of an object at runtime.

#### ```Regular Expressions```


## S:

#### ```Scaffolding```

#### ```Scope```
The accessibility of objects (variables/functions) in some part of your program.

#### ```Service workers```

#### ```Set```

#### ```Side effects```

#### ```Singleton```

A ```pattern``` that provides existing of a single instance of a class.

#### ```Symbol```

New data type offered by ES6, a unique identifier for special object properties.

#### ```SOLID```

<details>
  <summary>🔎 Single Responsibility Principle ...</summary>

  "There should never be more than **one reason** for a class **to change**".

Ask yourself what does your class do?

If the answer is a list of things your class probably don't satisfies SRP (like ```printReport``` method inside ```Employee``` class).

</details>

<details>
  <summary>🔎 Open/Closed Principle ...</summary>

"Software entities (classes, modules, functions, etc.) should be **open for extension**, but **closed for modification**."

It promotes using an abstractions for linking entities (like area method for each Shape for using area in some entity, so you can easily create another shape).
</details>

<details>
  <summary>🔎 Liskov Substitution Principle ...</summary>

"If *S* is a subtype of *T*, then objects of type *T* may be replaced with objects of type *S* without altering any of the desirable properties of that program".

So if you have a parent class and a child class, then the **base class** and **child class** can be **used interchangeably** without getting incorrect results. (It's better to extend Reactangle and Squre from Shape).
</details>

<details>
  <summary>🔎 Interface Segregation Principle ...</summary>

"Clients should not be forced to depend upon interfaces that they do not use."

**Split** your **interfaces** to smaller for using only ones that you need.
</details>

<details>
  <summary>🔎 Dependency Inversion Principle ...</summary>

Gives recommendations on what dependencies should be:

**High-level** modules should **not depend** on **low-level** modules. Both should depend on **abstractions**.

**Abstractions** should **not depend** upon **details**. Details should depend on abstractions.

</details>

#### ```Spy```

Is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. 

<details>
  <summary>🔎 spy example ...</summary>

```js
  const object = { method: () => ({}) }
  const spy = sinon.spy(object, 'method')

  object.method(42)
  object.method(1)

  assert(spy.withArgs(42).calledOnce)
  assert(spy.withArgs(1).calledOnce)
```
</details>

*Related terms*: [```stub```](#stub), [```mock```](#mock)

#### ```Stack frame```
Block of the [```stack```](#call-stack) corresponds to some function call that keeps relative information about this call (local variables, parameters, a location where to be returned).

#### ```Strategy```

A ```pattern``` that selects one of interchangeable classes that contain a behavior that is similar in functionality and implements a common interface (example for ```FP``` is ```Array.prototype.sort``` method).

#### ```Stub```

Is function ([```spy```](#spy)) with pre-programmed behavior:

<details>
  <summary>🔎 stub example ...</summary>

```js
  const callback = sinon.stub()
  callback.withArgs(42)
    .onFirstCall().returns(1)
    .onSecondCall().returns(2);
  callback.returns(0)

  callback(1) // 0
  callback(42) // 1
  callback(1) // 0
  callback(42) // 2
  callback(1) // 0
  callback(42) // 0
```
</details>

*Related terms*: [```spy```](#spy), [```mock```](#mock)

## T:

#### ```TCO```
*Tail Call Optimization*

*Read more about* [```Tail call optimization in JavaScript```](/posts/tail-call-optimization-in-javascript)

#### ```TDD```

*Test Driven Development*

#### ```Throttling```

An optimization technique that enforces a maximum number of times a function can be called over time (execute this function at most once every ```N``` milliseconds):

<details>
  <summary>🔎 throttle implementation ...</summary>

```js
const throttle = (delay, fn) => {
  let timer, wait = false, wrapped = null

  wrapped = (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = undefined
        if (wait) wrapped(...args)
      }, delay)
      wait = false
      return fn(...args)
    } else {
      wait = true
    }
  }

  return wrapped
}

const fn = arg => console.log('arg: ', arg)
const ft = throttle(200, fn)
const timer = setInterval(() => ft('foo'), 50)
setTimeout(() => clearInterval(timer), 1000)
```
</details>

*Related terms*: [```debouncing```](#debouncing)

## U:

#### ```Unit Tests```

Testing of individual units (functions/classes) by supplying input and making sure the output is as expected.

#### ```URI```
*Uniform Resource Identifier*. URIs are a standard for identifying documents using a short string of numbers, letters, and symbols. ```URLs```, ```URNs```, and ```URCs``` are all types of URI.

#### ```URL```
*Uniform Resource Locator*. URL is a reference to a web resource that specifies its location and a mechanism for retrieving it.


<!-- ## V: -->

## W:

#### ```Weak typing```
Means that compiler can use [```coercion```](#coercion).

*Related terms*: [```dynamic typing```](#dynamic-typing), [```duck typing```](#duck-typing)

#### ```WeakMap```

#### ```WeakSet```

#### ```WebWorkers```

#### ```Wrapper```

A function that wraps a function by adding new behaviour:
<details>
  <summary>🔎 example of Cancelable wrapper ...</summary>

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

<!-- ## X: -->
<!-- ## Y: -->
<!-- ## Z: -->

<br/>
<br/>
