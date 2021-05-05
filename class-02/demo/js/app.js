'use strict';

// proof of life
console.log('hello world');

// ask a question that expects a yes or no answer
let disneyland = prompt('Have you ever been to Disneyland? Please answer with yes or no:');

console.log(disneyland);

// is not good practice to mutate data that comes back from the user.

let lowerCaseDisney = disneyland.toLowerCase();
let upperCaseDisney = disneyland.toUpperCase();

console.log(lowerCaseDinsey);
console.log(upperCaseDisney);

// if they say yes - Awesome! It truly is the happiest place on earth.
// y, YES, yes?
// I want to accept YEST, Yes, yEs, yeS
// We'll streaminline the data that came back.
// if they say no - Oh! Too bad! You are missing out.

if (lowerCaseDisney === 'yes' || lowerCaseDisney === 'y') {
  alert('Awesome! It truly is the happiest place on earth!');
} else if (lowerCaseDisney === 'no' || lowerCaseDisney === 'no') {
  alert('Oh! Too bad! You are missing out.');
} else {
  alert('Looks like you didn\'t unerstand the question.')
}

// SWITCH STATEMENT: If I have more than 3??? Switch statements.
// prompts always return strings
let funNumberLevel = prompt('On a scale of 1-3, with 3 being the most fun, how fun was disneyland when you wnet?')

switch (funLevel) {
  case '1':
    alert('I am sorry you didn\'t have fun. Maybe you should have gotten a pickle.');
    break;
  case '2':
    alert('Shouldn\'t have eaten that turkey leg.');
    break;
  case '3':
    alert('That\'s what I like to hear.');
    break;
  default:
    alert('Let me help you plan your next trip!');
    break;
}