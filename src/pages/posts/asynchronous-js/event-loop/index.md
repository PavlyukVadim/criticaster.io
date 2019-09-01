---
path: /posts/event-loop-in-javascript
date: '2019-08-24'
title: 🤙 Event loop in JavaScript
category: async-js
metaTitle: Event loop in JavaScript
metaDescription: Event loop in JavaScript
metaKeywords: 'javascript, js, js core, event loop, closure, array, number, string, bool'
---

## Table of content:

* [Asynchronous programming overview](#asynchronous-programming-overview)
* [Event loop](#event-loop)

### Asynchronous programming overview

You might have heard that JavaScript is a single-threaded non-blocking concurrency programming language. But, what it really means and how it really works?

JavaScript code is performed by some engine (for example in Google Chrome - V8) in a single thread. So, it means that each time your program can perform a single instruction.

What does mean non-blocking? It's related to another statement - ```asynchronous```. In simple words, it means that your code can be performed not in the same order as you've written it. And more detailed, it means that your program not blocking by asynchronous operations (I/O operations, like working via a network, reading from file system - operations that need access to the separate memory area), and can perform other operations.

But, how it can be possible?

### Event loop

There is a special mechanism to achieve the behavior described above - the ```event loop```. But, first, we have to recall what call stack is.

#### Call stack

Call stack keeps information about functions calls in separate ```stack frames``` (how functions have been called, and order of that calls by the stack structure), so when a function calls, a new stack frame is pushed at the top of the ```call stack```, when function is finished, the top stack frame removes.

Let's consider following code sample:

```js
const foo = () => {}
const bar = () => foo()
bar()
```

```Call stack``` during runtime will be looks like:

```
global
global => bar
global => bar => foo
global => bar
(empty)
```

But it's an example for synchronous functions. When you call some async functions (like fetch) these functions delegates the execution in you hosting (like a browser) using separate workers. After delegation stack frame deletes and code execution moves further. But, how to handle results of that deleted function? Here event loop rises. When that functions are done (like a got response) in event queue pushed a new event. Event loop with some period checks ```call stack```,  ```event queue``` and every time when the call stack is empty it takes event from queue and pushes into call stack.

Example of execution async code:

```js
[1, 2, 3].forEach((item) => {
  setTimeout(() => {
    console.log(item)
  }, item * 1000)
})
```

```setTimeout``` is part of the WebAPI (for browsers) that will be delegated with retuting execution into call stack by ```event loop```:

  Call Stack                 |  WebAPI                         |  Event Queue
:----------------------------|:--------------------------------|:-------------
```(forEach)```              |                                 |                
```(forEach => setTimeout)```|                                 |                
```(forEach)```              | *Timer-1*                       |                
```(forEach => setTimeout)```| *Timer-1*                       |
```(forEach)```              | *Timer-1*, *Timer-2*            |                
```(forEach => setTimeout)```| *Timer-1*, *Timer-2*            |                
```(forEach)```              | *Timer-1*, *Timer-2*, *Timer-3* |                
```()```                     | *Timer-1*, *Timer-2*, *Timer-3* |                
```()```                     | *Timer-2*, *Timer-3*            | Event by *Timer-1*
```(console.log)```          | *Timer-3*                       | Event by *Timer-2*
```()```                     |                                 | Event by *Timer-2*, Event by *Timer-3*
```(console.log)```          |                                 | Event by *Timer-3*
```()```                     |                                 | Event by *Timer-3*
```(console.log)```          |                                 |
```()```                     |                                 |

As you can see, events are moved from event queue into call stack only when the last is empty, so when you perform heavy synchronous functions (like iteration through big dataset) your events might be waiting for a lot before being performed.
