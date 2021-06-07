# Lecture Notes
```js
const myFunct = function() {};
function myFunct() {};
```

## Hoisting
- in js 2 passes are made to interperet the language/code
  - first pass
    - variable names are stored in memory (only look at left side)
    - functions ar edeclared meaning their variables names are stored.
  - second pass we execute
    - assignments are read and code is executed.

## Pass by reference  vs pass by value
- js ALWAYS PASSES BY VALUE
- even when passing a reference as a value
- Even with objects and arrays: It always passes by value, but for objects the value of the variable is a reference.
- No matter what anyone tells you!

Most other languages operate by passing references, not values.

```js
let num1 = 3;
let num2 = 5;

function myFunct(a, b) {
  return a+b;
}

myFunct(num1, num2);
a = 3; // JavaScript does not reference num1. It reads the value of num1, and assigns that value to a.
//if  I set a = 15, it doens't change the value of num1.

```

```js
const myObj = {
  color: 'blue',
  size: 10
}

function changeObjects(obj) {
  obj.color = 'green';
}

let myColor = myObj.color
console.log(myColor);
changeObjects(myColor);
console.log(myColor);
console.log(myObj);

changeObjects(myObj);
console.log(myObj); // will show color as green
//in js what happens is that obj the parameter/variable is given a copy of the reference address to where myObj exists in memory -- happens in with arrays also because they are a type of object.

let num1 = 5;
let num2 = 10;

function changeNum(a, b) {
  a = 15; // num1 stays as 5
  return a + b; // returns 25
}

changeNum(num1, num2);
console.log(num1);
```

## for lab

- cannot change HTML
- Anything that says "to do" is your job. Nothing else is your problem.
- Start on app.js, so you know what your prototypes are.

```js
Cart.prototype.addItem = function(product, quantity) {
  // DONE: Fill in this instance method to create a new CartItem and add it to this.items
  let myItem = new CartItem(product, quantity)
  this.items.push(myItem)
}
```