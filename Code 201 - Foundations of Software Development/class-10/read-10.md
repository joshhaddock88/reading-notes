# Reading Notes
## Chapter 10, JavaScript "Debugging"

### The Stack
- The number of processess waiting for other processes.

**hoisting**: *need more context*

**lexical scope**: that is, linked to the object they are defined within.

### How to deal with errors
1. Debug the script.
2. Handle errors gracefully.

### Debugging workflow
1. Where is the problem? Look at the error message.
2. What exactly is the problem?
  - Check breakpoints
  - Test small pieces of code
  - Check number of parameters

All browsers have dev tools built in.

You can log data to the console to check.

- **console.info()**: for general information.
- **console.warn()**: for warnings.
- **console.error()**: can be used to hold errors.

You can group console message together with **console.group**
```js
console.group('Area calculations');
  console.info('Width ', width);
  console.info('Height ', height);
  console.log(area);
console.groupEnd();
```
**console.table()** is helpful for tabular data.

**console.assert()** tests if a condition is met, and write the console if the expression evaluates to false.

You can use **breakpoints** to pause a code on any line and check values.

You can also **step over** and **step into** functions using debugger.

You can set **conditional breakpoints** which only break if a condition is met.

You can place debugger **keywords** into conditions so that a breakpoint only triggers when a condition is met.

```js
try {
  //Try to execute this code
} catch (exception) {
  // If there is an exception, run this code
} finally {
  // This is always executed
}
```
Debugging tips
- Add numbers
- strip it back
- explain the code
- search(Stack Overflow)
- Code playgrounds
- validation tools (linters)

Common Errors
- Go back to basics (case sensitive, quotes etc)
- Misses/extra characters
- data type issues