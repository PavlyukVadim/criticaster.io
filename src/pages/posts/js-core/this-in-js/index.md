---
path: /posts/keyword-this-in-javascript
date: '2019-08-16'
title: 🔑 Keyword this in JavaScript
category: js-core
metaTitle: Keyword this in JavaScript
metaDescription: Keyword this in JavaScript
metaKeywords: 'javascript, js, js core, this, array, number, string, bool'
---

## Table of content:

* [Keyword this overview](#keyword-this-overview)
* [Band of call-site cases](#band-of-call-site-cases)
* [Default binding](#default-binding)
* [Implicit binding](#implicit-binding)
* [Explicit binding](#explicit-binding)
* [new binding](#new-binding)
* [Priority](#priority)
* [Arrow functions and this](#arrow-functions-and-this)

### Keyword ```this``` overview

```this``` is a dynamic context of the function, that defined by call-site (added to ```call-stack``` during the call).

Example: 

```js
function foo () {
  console.log(this.a)
}
```

This function will output different values in order to the context of its calling.

### Band of call-site cases

So, how do these types look? What is the context in those cases?

A brief overview of what is ```this```:

* default binding - ```global object```/```undefined``` in strict mode
* implicit binding - object contained called method
* explicit binding - object passed as context using ```call```/```apply```/```bind``` (works like the default for ```null```/```undefined``` as context)
* ```new``` binding - created object

#### Default binding

By default this is referred to the global object, or to undefined in strict mode:

```js
var a = 'bar'
function foo1 () {
  console.log(this.a)
}

function foo2 () {
  'use strict'
  console.log(this.a)
}

foo1() // 'bar'
foo2() // Cannot read property 'a' of undefined
```

#### Implicit binding

When a function is a method, this refers to the object contained that method:

```js
var a = 'global bar'
function foo () {
  console.log(this.a)
}

var obj = {
  a: 'bar',
  foo,
}

obj.foo() // bar
```

#### Explicit binding

You can explicit set the context using ```call```/```apply``` methods:

```js
function foo () {
  console.log(this.a)
}

var context = {
  a: 'bar'
}

foo.call(context) // bar
```

Note: ```call```/```apply``` get a function arguments after context value, and the difference is that ```call``` gets a list of arguments while ```apply``` gets singe argument - an array of arguments.

Also, you can create a new function that will hardbound to the context using the ```bind``` method.

#### ```new``` binding

And, the last but not least binding to creating object during ```constructor call```:

```js
function Foo (a) {
  this.a = a
  console.log(this.a)
}

var foo = new Foo('bar') // 'bar'
console.log(foo) // { a: 'bar' }
```

### Priority

The power of binding types in order as we examined them:

* default binding
* implicit binding
* explicit binding
* new binding

Note: you can't use new binding with ```call```/```apply``` methods, but can with ```bind```, that will ignore bound context for constructor calls:


```js
function foo (a) {
  this.a = a
}

var context = {}
var boundFoo = foo.bind(context)
boundFoo('boundFoo call')
console.log(context) // { a: 'boundFoo call' }

var boundFooInstance = new boundFoo('boundFoo call')
console.log(context) // { a: 'boundFoo call' }
console.log(boundFooInstance) // foo { a: 'boundFoo call' }
```

### Arrow functions and ```this```

Arrow functions offered by ```ES6```, have a special behavior with ```this``` keyword, actually, they just get a value of the enclosing (function/global) scope.

We can use that improvement for passing a function as callbacks to save out context inside other functions, like ```setTimeout```:

```js
var a = 'global bar'
function foo () {
  setTimeout(function() {
    console.log(this.a) // global bar
  }, 100)

  setTimeout(() => {
    console.log(this.a) // bar
  }, 200)
}

foo.call({ a: 'bar' })
```
