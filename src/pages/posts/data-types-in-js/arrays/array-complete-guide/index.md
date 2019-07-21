---
path: /posts/arrays-in-javascript-complete-guide
date: '2019-07-20'
title: 🗄️ Complete guide to Arrays in JavaScript
category: data-types-in-js
metaTitle: Complete guide to Arrays in Js
metaDescription: Complete guide to Arrays in Js
metaKeywords: 'javascript, js, arrays'
featured: true
---

## Table of content:

* [Arrays Introduction](#arrays-introduction)
* [How to create an Array in Javascript?](#how-to-create-an-array-in-javascript)
* [How to access an Array item](#how-to-access-an-array-item)
* [How to update an Array item](#how-to-update-an-array-item)
* [Array length property](#array-length-property)
* [typeof Array](#typeof-array)
* [How to check if variable is an Array](#how-to-check-if-variable-is-an-array)
* [How to loop over Array items (forEach)](#how-to-loop-over-array-items)
* [How to add item to Array (push, unshift)](#how-to-add-item-to-the-end)
* [How to remove item from Array (pop, shift)](#how-to-remove-last-item)
* [How to replace items in Array](#how-to-replace-items-in-array)
* [How to find item position in Array](#how-to-find-item-position-in-array)
* [How to sort Array](#how-to-sort-an-array)
* [Array iteration methods (map, filter, reduce, find)](#array-iteration-methods)
* [How to reverse Array](#how-to-reverse-array)
* [How to merge Arrays](#how-to-merge-arrays)
* [How to check if an item is present in Array](#how-to-check-if-an-item-is-present-in-array)

### Advanced section:

* [Spared arrays](#spared-arrays)
* [How to fill array with value](#how-to-fill-an-array-with-value)
* [How to create an Array from an arrays like objects](#how-to-create-an-array-from-array-like-objects)
* [How to remove all duplicates from an Array](#how-to-remove-all-duplicates-from-an-array)

### Arrays Introduction

Arrays - it’s a composing data structure, that consist of ordered objects. In some programming languages, arrays have low-level optimization for these objects because of sequence storing them into the memory. In javascript, it a little bit confusing, because, in javascript, arrays are just objects with some special behavior, that allows emulating array interface. More about that in the ```typeof``` section.

### How to create an Array in Javascript?

There're a few ways of creating arrays in javascript. Let's start considering them here.
The first one is by using array literal notation (empty brackets):

```js
const a = []
```
Also, you can pass any object into the array:

```js
const a = [1, 'foo', false]
```

Creating an array using ```Array constructor``` is equal to defining array using literal notation:

```js
const a = new Array() // []
```

And you can still pass any items into the constructor:

```js
const a = new Array('foo', 'bar', 'baz') // ['foo', 'bar', 'baz']
```

But there's an exception with a single number as an argument. In that case, will be created an array of the relative amount of empty items. Notice, that they are really empty slots and aren't ```undefined```. It's really a very important. And read more about that in the ```advanced section```:

```js
const a = new Array(5) // [,,,,]
```

But in the other cases, it works as expected:

```js
const a = new Array('foo') // ['foo']
```

ES6 added some more ways to create an ```Array``` instance. ```Array.of``` works the same as ```new Array``` but without exception for single number as argument, so it totally equal to the literal notation:

```js
const a = Array.of(5)
```

And the last possible way to create array - it’s using the ```Array.from``` method, that allows converting array-like object’s (object with ```length``` property) or any iterable item (```string```, for example) to an array. More details about using this method in the advanced section.

```js
const a = Array.from({ length: 2 })
```

### How to access an Array item

Each ```Array``` element has own index (of position), that starts from ```0```. For getting some item you have to just use this index:

```js
const a = ['foo', 'bar']
console.log(a[0]) // 'foo'
```

### How to update an Array item

For updating or setting ```Array``` item you have to also use an element index and plain assigning expression:

```js
const a = ['foo', 'bar', 3] // ['foo', 'bar', 3]
a[0] = 1 // [1, 'bar', 3]
```

### Array length property

Arrays have an inner property ```length``` that equals to the amount of array elements. For example:

```js
const a = ['foo', 'bar']
console.log(a.length) // 2
```

But, there is an interesting moment, as far as you can manually create an ```Array``` item with any index (even not even with number type, that is very bad practice) value of ```length``` property will be counted based on the max numeral index, but not actually by the number of array elements.

For example:

```js
const a = ['foo', 'bar'] // ['foo', 'bar']
a[5] = 'baz' // ['foo', 'bar', empty × 3, 'baz']
console.log(a.length) // 6
```

### typeof Array

At the introduction section, we noticed that arrays are actually objects, so it shouldn't be a surprise for you:

```js
typeof [] === 'object' // true
```

### How to check if variable is an Array

If the ```typeof``` operator can’t help in Array detection, how we can do it? There is a helper method for that purpose - ```Array.isArray```:

```js
Array.isArray([]) // true
```

### How to loop over Array items

Instead of using plain ```for``` statement you can use ```forEach``` method, that takes function, which will be executed for each item. This function has 3 parameters:

* ```item``` - current item,
* ```index``` - index of item
* ```array``` - copy of array that calls that function

```js
['a', 'b', 'c'].forEach((item, index) => {
  console.log(index, item)
})

// 0 'a'
// 1 'b'
// 2 'c'
```

### How to add item to the end

The method ```Array.prototype.push``` adds a new element and returns a new length of the array:

```js
const a = ['foo', 'bar']
const n = a.push('baz')

console.log(a) // ['foo', 'bar', 'baz']
console.log(n) // 3
```

### How to add item at the start

```Array.prototype.unshift``` is a similar method to ```Array.prototype.push```, that do the same but from the start of the array:

```js
const a = [2, 3, 4]
const n = a.unshift(1)

console.log(a) // [1, 2, 3, 4]
console.log(n) // 4
```

### How to remove last item

```Array.prototype.pop``` removes the last item from Array, and returns removed item:

```js
const a = [1, 2, 'foo']
const lastItem = a.pop()

console.log(a) // [1, 2]
console.log(lastItem) // 'foo'
```

### How to remove first item

```Array.prototype.shift``` removes the firts item from Array, and returns removed item:

```js
const a = ['foo', 1, 2]
const lastItem = a.shift()

console.log(a) // [1, 2]
console.log(lastItem) // 'foo'
```

### How to replace items in Array

For modifying items, you can use the ```Array.prototype.splice``` method. It has 2 required parameters and list of items as additions:

* ```start``` - the start position of modifying
* ```deleteCount``` - number of items, that should be deleted
* ```[item1, ...]``` - list of new items (not required)

The method returns an array of deleted items.

So, by skipping new items, you can easily remove items from the middle of the array:

```js
const a = [1, 2, 3]
const removedItems = a.splice(1, 1)

console.log(a) // [1, 3]
console.log(removedItems) // [2]
```

By adding an item you can replace the existing item:

```js
const a = [1, 2, 3]
const removedItems = a.splice(1, 1, 'foo')

console.log(a) // [1, 'foo', 3]
console.log(removedItems) // [2]
```

### How to find item position in Array

```Array.prototype.indexOf``` returns the index of existed arrays item or ```-1``` otherwise:

```js
const a = [1, 2, 3]
const index = a.indexOf(2)

console.log(index) // [1]
```

With this method, you can often see a tilda (```~```) operand. It uses for checking if the item presents in the array (in other words ```~``` with ```-1``` will return ```0```, that means the absence of item). But, it isn’t the best practice for this purpose, using the ```Array.prototype.includes``` method will be a better solution.

### How to find last item position in Array

If you want to get the last index of the item, you have to use the ```Array.prototype.lastIndex``` method:

```js
const a = [1, 1, 1]
const lastIndex = a.lastIndexOf(1)

console.log(lastIndex) // [2]
```

### How to sort an Array

There is a built-in method for sorting array elements - ```Array.prototype.sort```. This method considers all items as strings and sorts them in alphabetical order:

```js
const a = ['a', 'c', 'b']
a.sort() // ['a', 'b', 'c']
```

But, due to this behavior, we have an issue with sorting a number of items. Because when we compare ```'11'```, ```'3'``` - ```11``` would be less. To solve this issue we have to use a ```compare function```. Compare function defines elements ordering according to the returning value. It uses 2 parameters (```a```, ```b```) to set the rule of sorting. When compare function returns a negative result (negative number) ```a``` is sorted before ```b```. When compare function returns a positive result ```a``` is sorted after ```b```. And the order stays the same for ```0``` as a result.

For example:

```js
[1, 2, 11].sort() // [1, 11, 2]
[1, 2, 11].sort((a, b) => a - b) // [1, 2, 11]
[1, 2, 11].sort((a, b) => b - a) // [11, 2, 1]
```

### Array Iteration methods

ES6 presented a lot of useful Iteration methods for Array. * All iteration methods take a function as a parameter, that will be executed for each array item.

#### Array.map

```Array.prototype.map``` returns a new array based on array modification:

```js
const a = [1, 2, 3]
const b = a.map((item) => item * 2) 

console.log(a) // [1, 2, 3]
console.log(b) // [2, 4, 6]
```

#### Array.filter

```Array.prototype.filter``` returns a new array based on the result of inner condition function. (Item will be present in the result array if the function returns ```true``` for that item):

```js
const a = [1, 2, 3]
const b = a.filter((item) => item >= 2)

console.log(a) // [1, 2, 3]
console.log(b) // [2, 3]
```

#### Array.reduce

```Array.prototype.reduce``` returns a single value that accumulates inside the inner function. (The function has the same interface as the previous ones, but as the first parameter has an addition accumulated value. And after this function you can pass the initial value of the accumulated value):

```js
const a = [1, 2, 3]
const sum = a.reduce((result, item) => result + item, 0)

console.log(a) // [1, 2, 3]
console.log(sum) // 6
```

#### Array.every

```Array.prototype.every``` checks if the each item of array satisfie the condition:

```js
const a = [1, 2, -1, 3]
const isPos = a.every((item) => item > 0)

console.log(isPos) // false
```

#### Array.some

```Array.prototype.some``` checks if each item of array satisfies the condition:

```js
const a = [1, 2, -1, 3]
const isPos = a.some((item) => item > 0)

console.log(isPos) // true
```

#### Array.find

```Array.prototype.find``` returns the first item that satisfies the condition:

```js
const a = [1, 2, -1, 'foo', 3, 'bar']
const str = a.find((item) => typeof item === 'string')

console.log(str) // 'foo'
```

### How to reverse Array

```Array.prototype.reverse``` reverses the existing array:

```js
const a = [1, 2, 3]
a.reverse() // [3, 2, 1]
```

### How to merge Arrays

To merge two arrays you can use ```Array.prototype.concat``` method. It takes arrays that will be merged into a new array:

```js
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = a.concat(b)

console.log(a) // [1, 2, 3]
console.log(b) // [4, 5, 6]
console.log(c) // [1, 2, 3, 4, 5, 6]
```

Also, you can use the ```spread``` operator:

```js
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]

console.log(a) // [1, 2, 3]
console.log(b) // [4, 5, 6]
console.log(c) // [1, 2, 3, 4, 5, 6]
```

### How to check if an item is present in Array

We've considered ```Array.prototype.indexOf``` methods and told that checking if element presents in the Array, not the most elegant solution. But we can’t say this about ```Array.prototype.includes```:

```js
const a = [1, 2, 3]
const isValue = a.includes(2)

console.log(isValue) // true
```

## Advanced section:

In that section, we are going to consider a little more specific topics about arrays.

### Spared arrays

As we mentioned in the section of creating an array, there is some special type of arrays - spared arrays. They are arrays that contain empty items.

For example, when you create an instance of an array with ```Array``` constructor and pass to it a single number will be created spared arrays:

```js
const a = new Array(3) // [empty × 3]
console.log(a.length) // 3
```

So what does it mean? If you try to get an item by index you will get ```undefined```. Actually, it isn’t ```undefined```, but some special type - ```empty slot```. It means that an array doesn't have item at this position (index).

And you can make sure using ```in``` operator:

```js
const a = new Array(3) // [empty × 3]
console.log(1 in a) // false
```

#### Other Cases of getting empty slots

* Array literal notation with empty items between commas:

```js
const a = [,,,] // [empty × 3]
const b = [1,,2] // [1, empty, 2]
const c = [1, 2,] // [1, 2] -> addition coma at the end is ignored
```

* By using ```delete``` operator:

```js
const a = [1, 2, 3] // [1, 2, 3]
delete a[1] // [1, empty, 3]
```

* By setting an item by index:

```js
const a = [] // []
a[5] = 1 // [empty × 5, 1]
```

#### When spared arrays are helpful

You might be wondering about the necessity of this arrays feature. But, it is very important from a performance point of view.

When you create an Array of 100000 items with ```new Array(100000)``` your browser doesn't actually store 100000 items (allocates memory for that), and when you use the iterates methods, they will ignore all of there holes:

```js
const a = new Array(3) // [empty × 3]
a.push('foo') // [empty × 3, 'foo']
a.map((item, index) => index) // [empty × 3, 3]
a.forEach((item) => console.log(item)) // 'foo'
a.every((item) => item === 'foo') // true
```

From the other hand, it can be a source of issues when you initialize a new array, and your iterate methods don't perform on it. So, it's important to keep in mind this type of arrays.

#### Spread operator with spared arrays

Be careful with ```spread operator``` used to spared arrays, because it changes all holes on the ```undefined``` value:

```js
[...new Array(3)] // [undefined, undefined, undefined]
```

### How to fill an array with value

```Array.prototype.fill``` sets a passed argument to each array cell, even to the empty slot:

```js
new Array(3).fill(1) // [1, 1, 1]
[1, 2, 3].fill(1) // [1, 1, 1]
```

### How to create an Array from array-like objects

We have already had a brief introduction to the  ```Array.from``` method, but it gives much more power for transforming iterable, array-like types to the true arrays.

With ```Array.from``` you can easily transform Set/Map to the array:
```js
const set = new Set([1, 2, 3]) // {1, 2, 3}
const map = new Map([['a', 1], ['b', 2]]) // {'a' => 1, 'b' => 2}
Array.from(set) // [1, 2, 3]
Array.from(map) // [['a', 1], ['b', 2]]
```

Also, you can use an array-like object with the ```length``` property:

```js
const a = Array.from({ length: 3 }) // [undefined, undefined, undefined]
```

And you can pass the second argument as map function:

```js
const a = Array.from({ length: 3 }, (item, index) => index) // [0, 1, 2]
```

### How to remove all duplicates from an Array

From the previous section, you might wonder how we can use effective transforming Set into Array with the ```Array.from``` method. It's a great way to remove all duplicates:

```js
const a = [1, 2, 2, -1]
const s = new Set(a)
const unique = Array.from(s) // [1, 2, -1]
```
