---
path: /promise-jobs-queue
date: '2020-01-29'
title: JavaScript Jobs Queue
category: async-js
metaTitle: JavaScript Promise - What is a promise? How promises work? | Criticaster
metaDescription: Promise is a new way to handle async code offered by ES6. Learn more what is promise in JavaScript, how does promise work, promise then and catch ...
metaKeywords: 'javascript, js, js core, promise, closure, array, number, string, bool'
hidden: true
---

<!-- * [Jobs queue](#jobs-queue) -->

Let's consider following code sample:

```js
setTimeout(() => {
  console.log('d')
}, 0)

const immediatePromise = Promise.resolve('foo')
const immediatePromise2 = Promise.resolve('bar')

immediatePromise
  .then(() => { console.log('c1'); return immediatePromise2 })
  .then(() => { console.log('c4') })

immediatePromise
  .then(() => { console.log('c2'); return 'c2' })
  .then((data) => { console.log('c3') })

const b = () => { console.log('b') }
const a = () => { console.log('a'); b() }

a()

// a
// b
// c1
// c2
// c3
// c4
// d
```

As we discussed the async behavior of promises during examining immediately resolved promises, all handlers are called asynchronous. But the output of the previous code sample makes to think about 2 strange things: setTimeout's callback had been called later; promise returned by the first fork of the ```immediatePromise``` had been called after promise returned by the second fork. How it can be possible?

Here we go. The name of the main actor - ```PromiseJobs```. Additional Job Queue offered by ES6. So, now we have at least two job queues: ```ScriptJobs``` and ```PromiseJobs```. The last one has a higher priority (it explains setTimeout call question). And another interesting case with ```PromiseJobs``` that if ```PromiseJob``` ends with returning an immediate value, new ```PromiseJob``` will be placed at the end of that ```PromiseJob```, and if ```PromiseJob``` ends with returning another Promise, new ```PromiseJob``` will be placed at the end of that ```PromiseJobs``` queue.
