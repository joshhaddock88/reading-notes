`use strict`

// --------------------------  Global Variables including the targets for our listeners & and place to apppend the orders to.
const orderFormElem = document.getElementById('orderForm');
const orderULElem = document.getElementById('orders');
Coffee.drinks = [];

 // constructor function
function Coffee(name, size, milk, type) {
  this.name = name;
  this.size = size;
  this.milk = milk;
  this.type = type;
}

 // -------------------------- prototypes/methods------------------------------------
 
Coffee.prototype.renderCoffee = function() {
  const liElem = document.createElement('li');
  orderULElem.appendChild(liElem);
  const orderInfoPElem = document.createElement('p');
  // Sara ordered a 12oz Americano with soy milk
  orderInfoPElem.textContent = `${this.name} ordered a ${this.size}oz ${this.type} with ${this.milk} milk.`
  liElem.appendChild(orderInfoPElem);
}

// ------------------------- Functions ---------------------------
function renderAllOrders() {
// this ensures that every time we pass through we are clearing the old orders, so we don't have 1, 1 + 2, 1, 1 + 2, 1 + 2 + 3: just 1 + 2 + 3.
  orderULElem.innerHTML = '';

  // go through my array of drinks and call renderCoffee on each one

  for (let drink of Coffee.drinks) {
    drink.renderCoffee();
  }
}

function makeADrink (name, size, milk, type) {
  let drink = new Coffee(name, size, milk, type);
  // every time I make a drink it will be put in the array
  // this is better practice than appending to a list inside the constructor function.
  Coffee.drinks.push(drink);
  //update storage here!
}

 // write a function to update storage
 function updateStorage() {
   // turn the thing I want to store into a string
   const stringifiedDrinks = JSON.stringify(Coffee.drinks);
   // set the itme into storage with a key
   localStorage.setItem('drinks', stringifiedDrinks);
 }
 // write a function to ge things out of storage
 function getStuffOut() {
   // request things from storage with our key
   let drinksFromStorage = localStorage.getItem('drinks');
   // if I get stuff back, parse it.
   if(drinksFromStorage) {
     let parsedDrinks = JSON.parse(drinksFromStorage);
     for (let drink of parsedDrinks) {
       makeADrink(drink.name, drink.size, drink.milk, drink.type)
     }
     //^^ this is the same as
    //  for (let i = 0; i < parsedDrinks.length; i++) {
    //    let drink = parsedDrinks[i];
    //    makeADrink(drink.name, drink.size, drink.milk, drink.type);
    // }
    // go ahead and render any order we have from storage.
    renderAllOrders();
   } else {
     console.log('You have nothing in storage');
   }
   // if you have nothing in storage you will have to make some products to vote on
   // IT WILL NO LONGER BE COFFEE
   // It will be a POJO - plain old JavaScript object
   // reinstantiate the objecst back to coffee objects
 }

 // function to handle submit
 function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const size = e.target.size.value;
  const milk = e.target.milk.value;
  const type = e.target.type.value;
  makeADrink(name, size, milk, type);
  renderAllOrders();
 }

 // --------------------------------------- Even Listeners ------------------------------------
 orderFormElem.addEventListener('submit', handleSubmit);
 getStuffOut();

 // put something in storage :
 // need a 'key', has to match when we get it out.
 // serialize our data