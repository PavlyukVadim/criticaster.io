---
path: /posts/objects-in-javascript-complete-guide
date: '2019-07-27'
title: 📦 Complete guide to Objects in JavaScript
category: data-types-in-js
metaTitle: Complete guide to Objects in Js
metaDescription: Complete guide to Objects in Js
metaKeywords: 'javascript, js, objects'
---

## Table of content:

* [How to create object](#how-to-create-object)
* [How to access object properties](#how-to-access-object-properties)
* [How to clone objects in js](#how-to-clone-objects-in-js)
* [Property descriptors](#property-descriptors)
* [Immutability](#immutability)
* [Object.prototype](#objectprototype)
* [How does properties assignment work](#how-does-properties-assignment-work)
* [How to check object property existence](#how-to-check-object-property-existence)
* [Constructors](#constructors)
* [Prototypal inheritance](#prototypal-inheritance)
* [Introspection in js](#introspection-in-js)

### How to create object

There're two ways: literal form and constructed:

```js
// literal form
var obj1 = { foo: 'bar' }

// constructed form
var obj2 = new Object()
obj2.foo = 'bar'
```

### How to access object properties

You have to use either the ```.``` operator or the ```[ ]``` operator:

```js
var obj = { foo: 'bar' }

console.log(obj.foo) // 'bar'
console.log(obj['foo']) // 'bar'
```

```[ ]``` operator can take any UTF-8 string as the property name:

```js
var obj = {}
obj['foo bar'] = 'baz'
console.log(obj) // { foo bar: 'baz' }
```

Property name is always a string, so name you passed as property name will be coerce to string:

```js
var obj = {}
obj[1] = 'foo'
obj[1] === obj['1'] // true
```

And a little more intresting example:

```js
var a = {}, b = {}, c = {}
b[a] = 1
b[c]++
console.log(b[b]) // 2
console.log(b) // { [object Object]: 2 }
```

Note: ES6 offers compound property names:

```js
var foo = 'bar'
var obj = {
  [foo + 'Prop']: 'baz',
}
console.log(obj) // { barProp: 'baz' }
```

### How to clone objects in js

The esiest, but slow way (that works only with [JSON-safe](/js-dictionary/#json-safe) items) - serialize/deserialize object using built-in methods:

```js
const obj = {
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(),  // date.toISOString()
  undef: undefined,  // lost
  inf: Infinity,  // 'null'
  re: /.*/,  // {}
}

const newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
```

ES6 offers more elegant solutions but only for shallow clone: Object.assign(..) and spread operator.

For deep cloning, you have to implement your custom solution, with a recursive copy of inner properties.

### Property descriptors

ES5 offers ```Object.getOwnPropertyDescriptor``` to get a property descriptor:

```js
var obj = { foo: 'bar' }
Object.getOwnPropertyDescriptor(obj, 'foo')
/*
{
  value: 'bar',
  configurable: true,
  enumerable: true,
  writable: true,
}
*/
```

The opposite method for gettiing a property descriptor is ```Object.defineProperty(..)```:

```js
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: true,
  configurable: true,
  enumerable: true,
})
```

Let's examine each property descriptor item closer:

#### writable

* ability to change the value of a property
* returns TypeError for any value changes in strict mode

#### configurable

* ability to change property descriptor with Object.defineProperty(..) method
* returns TypeError for any calls of Object.defineProperty(..), regardless of strict mode (the only writable can be changed from true to false without error)
* prevents the ability to use the delete operator (silently)

#### enumerable

* ability to show the property during object properties enumeration (like ```for..in``` loop/```Object.keys(..)```)

### Immutability

#### constant property

If you want to make a constant property (cannot be changed, redefined or deleted) you can combine ```writable:false``` and ```configurable:false```.

#### prevent extensions

```Object.preventExtensions(..)``` disable the ability to add new properties to object and returns TypeError for any extensions in strict mode.

#### seal

Creates a "sealed" object. (```Object.preventExtensions(..)``` + ```configurable:false``` for each property).

#### freeze

Creates a "frozen" object. (```Object.seal(..)``` + ```writable:false``` for each property).

### Object.prototype

Objects in JavaScript can be easily linked using ```prototype``` property as a bridge between them. When you're getting access to the object property, the property is searched at this object and if it's absence, the searching goes further by prototypes chain. 

#### How to create link to another object

You can use ```Object.create(..)``` from ```ES5``` that creates a new object linked to the passed argument via ```prototype```:

```js
var parentObj = { foo: 'bar' }
var obj = Object.create(parentObj)
console.log(obj.foo) // 'bar'
```

Or you can modify existing prototype using ```Object.setPrototypeOf``` from ```ES6```:

```js
var parentObj = { foo: 'bar' }
var obj = { baz: 'baz' }
Object.setPrototypeOf(obj, parentObj)
console.log(obj.foo) // 'bar'
```

#### How to get object prototype

```Object.getPrototypeOf(..)``` returns object propotype:

```js
var parentObj = { foo: 'bar' }
var obj = Object.create(parentObj)
Object.getPrototypeOf(obj) === parentObj // true
```

### How does properties assignment work

There are 3 cases of setting properties (using ```=``` assignment) due to property existence with the same name on [[Prototype]] chain:

* property is found higher on [[Prototype]] chain and that property has attribute ```writable:true```, then new property adds directly to the object as expected.

* property is found higher on [[Prototype]] chain, and that property has attribute ```writable:false```, then setting ignores (with throwing TypeError in ```strict mode```):

```js
'use strict'
var parentObj = {}
Object.defineProperty(parentObj, 'foo', {
  value: 'bar',
  writable: false,
})
var obj = Object.create(parentObj)
obj.foo = 'new value' // TypeError: Cannot assign to read only property 'foo'
```

* property is found higher on the [[Prototype]] chain and it's a setter, then the setter will be called.

Note: you can use Object.defineProperty(..) instead of ```=``` assignment to directly setting a property.

### How to check object property existence

For checking if object has a certain property you can use:
* ```in``` operator (checks existence on [[Prototype]] chain).
* ```Object.prototype.hasOwnProperty``` (checks existence only inside target object).

### Constructors

When you call a function with a ```new``` keyword you perform constructor call. So, the function will create a new object that linked to the function prototype.

Each function has a prototype property, that by default includes a link to that function named constructor.

Also, you can add custom properties that will available for constructor instances:

```js
function Foo(name) {
  this.name = name
}

Foo.prototype.output = function() {
  console.log(this.name)
}

var foo = new Foo('bar')
foo.output() // 'bar'
```

### Prototypal inheritance

To implement prototypal inheritance you have to link consturctors:

```js
ChildFn.prototype = Object.create(ParentFn.prototype)
// or
Object.setPrototypeOf(ChildFn.prototype, ParentFn.prototype)
```

Example:

```js
function ParentFn(foo) {
  this.foo = foo
}
ParentFn.prototype.output = function () {
  console.log(this)
}

function ChildFn(foo, bar) {
  ParentFn.call(this, foo)
  this.bar = bar
}
Object.setPrototypeOf(ChildFn.prototype, ParentFn.prototype)

var child = new ChildFn('foo', 'bar')
child.output() // { foo: 'foo', bar: 'bar' }
```

### Introspection in js

There are a few ways to examinate objects:

* operator ```instanceof``` takes object as left operand, constructor as right and checks if constructor prototype is detected somewhere on object [[Prototype]] chain:

```js
function Foo () {}
var foo = new Foo()
foo instanceof Foo // true
foo instanceof Object // true
```

* ```Object.prototype.isPrototypeOf(..)``` checks if object is detected somewhere on argument object [[Prototype]] chain:

```js
function Foo () {}
var foo = new Foo()
Foo.prototype.isPrototypeOf(foo) // true
```

As you can guess, with ```Object.prototype.isPrototypeOf(..)``` we can check if two object are linked:

```js
var parentFoo = {}
var childFoo = Object.create(parentFoo)
parentFoo.isPrototypeOf(childFoo) // true
```

* Also, we can directly retrieve the [[Prototype]] of an object with ```Object.getPrototypeOf(..)```:

```js
function ParentFn(foo) {}
function ChildFn(bar) {}
ChildFn.prototype = Object.create(ParentFn.prototype)
Object.getPrototypeOf(ChildFn.prototype) === ParentFn.prototype // true
```
