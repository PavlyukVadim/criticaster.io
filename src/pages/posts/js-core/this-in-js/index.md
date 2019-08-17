---
path: /posts/keyword-this-in-javascript
date: '2019-08-16'
title: 🔑 Keyword this in JavaScript
category: js-core
metaTitle: Keyword this in JavaScript
metaDescription: Keyword this in JavaScript
metaKeywords: 'javascript, js, js core, this, array, number, string, bool'
hidden: true
---

## Table of content:

* [Key](#)


### Keyword ```this``` overview

```this``` is dynamic context of the function, that defiends by call-site (added to call-stack during the call).

Example: 

```js
function foo () {
  console.log(this.a)
}
```

This function will output different values in order to context of it calling.

### Band of this cases

So, how does these types look?

Brief overview of what is this:

* default binding - global object/undefined in strict mode
* implicit binding - object contained called method
* explicit binding - object passed as context using call/apply/bind (works like default for null/undefined as context)
* new binding - created object

#### Default Binding

By default this is reffered to global object, or to undefined in strict mode:

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

#### Implicit Binding

When function is a method, this reffers to the object contained that method:

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

#### Explicit Binding

You can explicit set the context using call/apply methods:

```js
function foo () {
  console.log(this.a)
}

var context = {
  a: 'bar'
}

foo.call(context) // bar
```

Note: call/apply get a function arguments after context value, and differance is that call gets list of arguments while apply gets singe argument - array of arguments.

Also, you can create a new function that will hard bound to context using bind method.

#### new Binding

And, the last but not least binding to creating object during constuctor call:

```js
function Foo (a) {
  this.a = a
  console.log(this.a)
}

var foo = new Foo('bar') // 'bar'
console.log(foo) // { a: 'bar' }
```

### Types priority

The power of binding types in order as we examinated them:

* default binding
* implicit binding
* explicit binding
* new binding

Note: you can't use new binding with call/apply methods, but can with bind, that will ignore binded context for constructor calls:


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

### Arrow functions and this

Arrow functions offered by ES6, have a special behavior with this keyword, actually they just get an value of the enclosing (function/global) scope.

So, it's a great innovation for passing function as callbacks:

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
