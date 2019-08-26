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

* [asynchronous programming overview](#closure-overview)

### asynchronous programming overview

You might heard that JavaScript is singe threaded non-blocking concurency programming langugale. But, what it really means and theofore how it really works?

JavaScript is really performed by some engine (for example in Google Chrome - V8) in single thread. So, it means that each time your programm can perform signe instruction.

What does mean non-blocking? It's related to anothor statement - asynchronous. In simply words it means that your code can be performed non in the same order as you've writted it. And more detailed, you programm not blocking by asynchronous operations (I/O operations, like working via network, readding from file system - operations that needs access to separate memmory location), and can perform another operations.

But, how it can be possible?

### Event Loop

There is a speciall mechanism to achive behaviour described above - event loop. But, first we have to recall what call stack is.

#### Call stack

Call stack keeps information about functions calls in separate stack frames (how functions have been called, and order of that calls by the stack stucture), so when function calls, at the top of call stack will pushed a new stack frame, and when function finished, the top stack frame removes.

```js
const foo = () => {}
const bar = () => foo()
bar()
```

Call stack during runtime will be looks like:

```
global
global => bar
global => bar => foo
global => bar
(empty)
```

But it's example for sync functions. When you call some async functions (like fetch data) these functions delegade performing in you hosting (like browser) using separate workers. After delegation stack frame deletes and code execution moves futher. But, how to handle results of that deleted function? Here event loop rises. When that functions are done (like got response) in event queue pushed a new event. Event loop with some period checks call stack and event queue and every time when call stack is empty it gets event from queue and pushs into call stack.

Example of execution async code:

```js
[1, 2, 3].forEach((item) => {
  setTimeout(() => {
    console.log(item)
  }, item * 1000)
})
```

```setTimeout``` is part of the WebAPI (for browsers) that will be delegated with retuting execution into call stack by Event Loop:

  Call Stack               |  WebAPI                |  Event Queue
:--------------------------|:-----------------------|:-------------
```forEach => setTimeout```|                        |                
```forEach```              | timer1                 |                
```forEach => setTimeout```| timer1                 |
```forEach```              | timer1, timer2         |                
```forEach => setTimeout```| timer1, timer2         |                
```forEach```              | timer1, timer2, timer3 |                
```(empty)```              | timer1, timer2, timer3 |                
```(empty)```              | timer2, timer3         | Event by timer1 
```console.log```          | timer3                 | Event by timer2
```(empty)```              |                        | Event by timer2, Event by timer3
```console.log```          |                        | Event by timer3
```(empty)```              |                        | Event by timer3
```console.log```          |                        |
```(empty)```              |                        |

As you can see, events are moved from event queue into call stack only when the last is empty, so when you perfom havy sync functions (like iteration through big dataset) your events might be waiting for a lot before be perfomed.
