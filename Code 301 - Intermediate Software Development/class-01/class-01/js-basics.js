// Basic JS topics: Arrow functions & classes

// Arrow functions

// Write in a function that takes in 2 numbers and returns teh sum of those 2 numbers

function sum(a, b) {
  return a + b;
}

const sum = (a, b) => a + b;

// These two work in the same way

// Classes: a new way of constructor functions

class Animal {
  constructor(name) {
    this.name = name
  }

  sayHello = () => {
    console.log(`Hello from ${this.name}`);
  }
}

// extends means this Dog class is a special type of Animal

class Dog extends Animal {
  constructor(name, favoriteToy) {
    // super lets us access the superclass's constructo function
    super(name);
    this.favoriteToy = favoriteToy;
  }
  bark = () => {
    console.log('bark bark');
  }
}

let myAnimal = new Animal('Bingo');
let secondAnimal = new Dog('Spot');