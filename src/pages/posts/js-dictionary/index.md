---
path: /js-dictionary
title: 📙 JavaScript Dictionary
metaTitle: JavaScript Dictionary
metaDescription: JavaScript Dictionary | place with explanations for each buzzword in the JS world
metaKeywords: 'javascript, html5, canvas'
wrapperClass: dictionary
---

Place with explanations for each buzzword in the JS world.😀

[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

## Categories:

1. [JS Core](/js-dictionary/js-core)
1. [Design Patterns](/js-dictionary/design-patterns)
1. [Architecture principles](/js-dictionary/architecture-principles)
1. [Functional programming](/js-dictionary/functional-programming)
1. [Testing in JS]()

# Dictionary:
## A:

#### ```Array```

Basic composing data type. More on in [complete guide to Arrays](/posts/arrays-in-javascript-complete-guide).

#### ```AST```
*Abstract syntax tree*.

#### ```Abstract Equality```
Comparison operator (```x == y```, where x and y are values, produces ```true``` or ```false```).

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


## C:

#### ```Call stack```
A stack data structure that keeps information about active function call.

#### ```Cohesion```


#### ```Command```

A ```pattern``` that defines action and parameters as an object (like assuming a bank account transaction as an array of such objects, that objects often could be revoking).

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


#### ```Coupling```

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

#### ```Data Access Layer```

#### ```Data type```
Abstraction that has a bounded set of available values and operations that can be performed on these values.

#### ```Dependency Injection```

A form of ```IoC```, where implementations are passed into an object through constructors/setters, which the object will 'depend' on in order to behave correctly.

#### ```Dynamic typing```

Means that ariable can represents any value of any type. Read also: [Duck typing](#duck-typing), [Weak typing](#weak-typing).

#### ```Duck typing```
General term for "type checks" that make assumptions about a value's "type"
based on its shape (what properties are present).
"If it looks like a duck, and quacks like a duck, it must be a duck". Read also: [Dynamic typing](#dynamic-typing), [Weak typing](#weak-typing).


## E:

#### ```Event loop```
The mechanism that performs moving functions from the ```event queue``` to ```call stack``` when it becomes empty. Read more about [event loop](/posts/event-loop-in-javascript).

## F:

#### ```Factory```

A ```pattern``` for producing function, object, other data structures.

#### ```Facade```

A ```pattern``` for hiding the complexity, it offers a common interface for controlling instances of different classes.

#### ```First-class Function```

Functions are treated as values – you can assign a function into a variable, pass it around etc. Read also: [Higher-order Function](#higher-order-function).

## G:

#### ```Generator```

Function that can be paused in mid-completion with saving inner state ([example](/posts/generators-in-javascript#generator)).

#### ```GRASP```


## H:

#### ```Higher-order Function```

A function that takes a function as an argument, or returns a function. Read also: [First-class Function](#first-class-function).

#### ```Hoisting```
Moving all declarations to their respective scopes.


## I:

#### ```Immutable Data```

#### ```Inversion of control```

A programming principle by which the control of objects or portions of a program is transferred to a container or framework. 

#### ```Introspection```

The ability of a program to examine the type or properties of an object at runtime. Read more in the [Complete Guide to Objects](/posts/objects-in-javascript-complete-guide#introspection-in-js).

#### ```Iterable```

An object that contains an iterator that can iterate over its values ([example](/posts/iterators-in-javascript#iterable)).

#### ```Iterator```

An object that has the ```next(..)``` method on its interface ([example](/posts/iterators-in-javascript#iterator)).

## J:

#### ```JSON```

#### ```JSON-safe```
JSON-safe values consist of values that can be represented as JSON.
Not JSON-safe: ```undefined```s, ```function```s, ```symbol```s, ```object```s with circular references, ```Date```s, ```Infinity```, ```RegExp```s, ```Map```s, ```Set```s, ```Blob```s, ```FileList```s, sparse ```Array```s, ```Typed Array```s or other complex types.

## K:


## L:

#### ```Lexical scope```
[Scope](#scope) that defined during the lexing time.

#### ```Let```

#### ```Localstorage```

## M:

#### ```Map```

#### ```Meta Programming```

#### ```Mixins```

#### ```Memoization```

#### ```Mock```
Mocks or Fakes are faking certain modules or behaviors
to test different parts of a processes.


## N:

#### ```Number```

Numeric data type, that represents both integer and fractional numbers. Read more in the [Complete Guide to Numbers](/posts/numbers-in-javascript-complete-guide).

## O:

#### ```Object```

Basic data type. More on in [complete guide to Objects](/posts/objects-in-javascript-complete-guide).



## P:

#### ```Parasitic inheritance```

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


#### ```Promise```

#### ```Proxy```

ES6 feature that allows boxing software component with an interception of component handlers, like getting/setting/deleting/enumeration object properties, applying arguments to functions, etc.

#### ```Pure Function```

## Q:


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

#### ```Singleton```

A ```pattern``` that provides existing of a single instance of a class.

#### ```Symbol```

New data type offered by ES6, a unique identifier for special object properties.

#### ```SOLID```

* #### Single Responsibility Principle

"There should never be more than one reason for a class to change". Ask yourself what does your class do? If the answer is a list of things your class probably don't satisfies SRP (like ```printReport``` method inside ```Employee``` class).

* #### Open/Closed Principle

"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." It promotes using an abstractions for linking entities (like area method for each Shape for using area in some entity, so you can easily create another shape).

* #### Liskov Substitution Principle

"If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of that program." So if you have a parent class and a child class, then the base class and child class can be used interchangeably without getting incorrect results. (It's better to extend Reactangle and Squre from Shape).

* #### Interface Segregation Principle

"Clients should not be forced to depend upon interfaces that they do not use."
Split your interfaces to smaller for using only ones that you need.

* #### Dependency Inversion Principle

Gives recommendations on what dependencies should be:

  - High-level modules should not depend on low-level modules. Both should depend on abstractions.
  - Abstractions should not depend upon details. Details should depend on abstractions.

#### ```Spies```

#### ```Stack frame```
Block of the [stack](#call-stack) corresponds to some function call that keeps relative information about this call (local variables, parameters, a location where to be returned).

#### ```Strategy```

A ```pattern``` that selects one of interchangeable classes that contain a behavior that is similar in functionality and implements a common interface (example for ```FP``` is ```Array.prototype.sort``` method).

#### ```Stub```


## T:

#### ```TCO```
*Tail Call Optimization*. Read more about [TCO in JavaScript](/posts/tail-call-optimization-in-javascript).

#### ```TDD```


## U:

#### ```URI```
*Uniform Resource Identifier*. URIs are a standard for identifying documents using a short string of numbers, letters, and symbols. ```URLs```, ```URNs```, and ```URCs``` are all types of URI.

#### ```URL```
*Uniform Resource Locator*. URL is a reference to a web resource that specifies its location and a mechanism for retrieving it.


## V:


## W:

#### ```Weak typing```
Means that compiler can use ```implicit cast```. [Dynamic typing](#dynamic-typing), [Duck typing](#duck-typing).

#### ```WeakMap```

#### ```WeakSet```

#### ```WebWorkers```


## X:
## Y:
## Z: