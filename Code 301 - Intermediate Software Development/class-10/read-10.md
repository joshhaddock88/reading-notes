# The stack

**Asynchonous JavaScript** we have a callback function, an event loop, and a task que.

Last In First Out(LIFO) principle is used to temporarily store and manage function invoking.

```js
function firstFunction(){
  throw new Error('Stack Trace Error');
}

function secondFunction() {
  firstFunction();
}

function thirdFunction() {
  secondFunction();
}

thirdFunction();
```

In this line of code the stack begins with the firstFunction().

When a function is invoked (called), it is pushed into the strack frame. The strack frame is a memory location. The memory is cleared when the function returns.

The stack has a record of the stack position at all time, like standing in a queue.

```js
function  firstFunction() {
  console.log('Hello from firstFunction');
}

function secondFunction(){
  firstFunction();
  console.log('The end from the second function.')
}

secondFunction();
```

What causes a stack overflow?

Essentially recursion.

```js
function selfCall() {
  selfCall();
}

selfCall();
```

1. Stack is single threaded, it can only do one thing at a time.
2. Code execution is synchronous.
3. Invocation creates a strack frame in temporary memory.
4. LIFO - Last In, First Out