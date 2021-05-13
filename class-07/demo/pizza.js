function Pizza (nameValue, meat, cheese, veggies) {
  this.name = nameValue;
  this.meat = meat;
  this.cheese = cheese;
  this.veggis = veggies;
}

//make a pizza
let joshuaPizza = new Pizza ('Joshua', 'pepperoni', 'mozzarella', ['onion', 'mushroom', 'olives']);
console.log(joshuaPizza);

//prototype

Pizza.prototype.slice = function(){
  console.log(`${this.name}'s pizza has been sliced`)
}
joshuaPizza.slice();