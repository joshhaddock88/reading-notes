'use strict'
// This is for our linter

// proof of life
console.log('Hello World');

alert ('Welcome to my Disneyland Game');

// get users name
let userName = prompt('What is your name?');
console.log('our user is name', userName);

// what happens if user doesn't answer -- ''
// hits cancel -- userName is null

// I want to make sure a user HAS to enter a valid name
// while(userName === null || userName === '');

//if (!userName) {
//   userName = 'guest';
// }
while(!userName){
  userName = prompt('What is your name? Please use a real name');
}

console.log(userName);

alert('Hi ' + userName + '.' + ' Thanks for visiting.');

// let try the !== comparison operator

if (userName !== 'Mickey Mouse') {
  console.log('not Mickey Mouse');
  alert('I was kind of hoping you\'d be someone else.');
}

let snackArray = ['Dole Whip', 'Pickles', 'Turkey Leg'];
console.log('original array value', snackArray);

// Array Methods - Built in functions that work on array
//let newSnack = prompt('What is your favorite snack?')

// add items to the end of our list - efficient
//snackArray.push(newSnack);

snackArray.push('Hungry Bear Burger');

// add itmes to the beginning unshift - inefficient
snackArray.unshift('Mickey Pretzel');

console.log('new array value', snackArray);

console.log('This is the index of dole whip', snackArray.indexOf('Dole Whip'));

// can we loop through th earray and check if someone can guess one of our favorite snacks?

let snackGuess = prompt('Can you guess one of my favorite snacks?');
console.log(snackGuess, 'This is their guess');

// loop through the array

for (let i = 0; i < snackArray.length; i++) {
  console.log(snackArray[i]);
  if(snackArray[i] === snackGuess) {
    console.log('You got it!');
  }
}


// You will have to give the user multiple guesses!
// If they get it right you want to stop running the loops.
// Just like with all cards are black - reference FLAG
// You'll need a NESTED LOOP

// We will circle back on this and we'll get a time to look at it.

//---- Other Code from earlier Demo

// const cardArray = ['ace', 'jack', 'two', 'four', 'seven', 'three', 'king'];

// for (let i = 0; i < cardArray.length; i++) {
//   console.log('The loop is restarting');
//   console.log("This is the current value of the number I am on", i);
//   console.log('This is the value of my card in my array at the index of the number I am on', cardArray[i]);
// }

// // the first time we look at the loop we declare and define the variable.
// // every time we start the loop we evaluate the condition.
// // if it is true we run the code block.
// // THEN we increment/decrement our number. This step happens last.

// // ++ increments the number by 1
// // == i += 1
// // == i = i + 1

// const cardColor = ['black', 'black', 'black', 'red', 'red', 'black', 'red'];

// // write a while loop that stops looping if every card is not black
// //assume every card is black
// // set ever card to via black via statment
// let allCardsAreBlack = true;
// let startingCount = 0;
// // while(allCardsAreBlack === true)
// // LOOPS HAVE TO STOP!!!
// while(allCardsAreBlack && startingCount < cardColor.length) {
//   console.log(allCardsAreBlack);
//   if (cardColor[startingCount] !== 'black') {
//     allCardsAreBlack = false;
//     console.log(allCardsAreBlack, "the card changed this to false")
//   }
//   console.log(cardColor[startingCount]);
//   startingCount++;
// }

