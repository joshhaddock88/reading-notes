**Complexity is anyhting that makes software hard to understand or modify** - *John Outerhout*

Conditions of pure functions
1. It returns the same results with the same arguments **deterministic**
2. It does not cause any obersvable side effects.


Pure functions do not use global arugments in their bodies.

```js
let PI = 3.14

const calculate Area = (radius) => radius * radius * PI;
```
^ Impure

```js
let PI = 3.14;
const caluculate Area = (radius, pi) => radius * radius * pi;
```
^ Pure

Any function that relies on a random number generator cannot be pure.

Reading files cannot be pure.

How to make a function that changes a global variable pure?
```js
let counter = 1;

const increaseCounter = (value) => value + 1;
```

