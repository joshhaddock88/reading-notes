// randomly want to put two goats on the screen
// allows users t oclick on one of the two goats
// tally the votes each image gets
// allow only a certain number of votes and stop voting after that

// a user clicks on a goat
// add to the goat object
// check how votse we have so far, if we stil have votes left
// render more images
// repeat
// if not turn off listener
// render results

// --------------------------------------------------- global variables/constants

const resultsPanelUlElem = document.getElementById('goat-clicks');
const gotImageSectionTag = document.getElementById('all_goats');
const leftGoatImageTag = document.getElementById('left_goat_img');
const rightGoatImageTag = document.getElementById('right_goat_img');
const leftGoatH2Elem = document.getElementById('left_goat_h2');
const rightGoatH2Elem = document.getElementById('right_goat_h2')

let voteCounter = 0;

currentRightGoat = null;
currentLeftGoat = null;



// goat constructor function
// names, image
function Goat(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.timesShown = 0;

  //might not see this in production code depending on where you work, but it is a handy way of getting every goat into the allGoats array every time you make one.
  Goat.allGoats.push(this);
}

// let locations = [];

Goat.allGoats = [];

// make a method that renders one goat to the page
// needs to know 'this'
// needs to know 'where to render it'
Goat.prototype.renderGoat = function (h2, imageTag) {
  imageTag.src = this.imgPath;
  h2.textContent = this.name;
}

// make a global function that takes two goats and calls their render method - take two goats as arguments

function renderTwoGoats(leftGoat, rightGoat) {
  leftGoat.renderGoat(leftGoatH2Elem, leftGoatImageTag);
  rightGoat.renderGoat(rightGoatH2Elem, rightGoatImageTag);
}

// pick random goats
// maybe want to have those global vars that represent the current goat that we pick.

function pickGoats() {
  const leftGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
  let rightGoatIndex;
  while(rightGoatIndex === undefined || rightGoatIndex === leftGoatIndex) {
    rightGoatIndex = Math.floor(Math.random() * Goat.allGoats.length);
  }

  //lets assign the current left and current right goats based off the index nubmers we got ^^
  currentLeftGoat = Goat.allGoats[leftGoatIndex];
  currentRightGoat = Goat.allGoats[rightGoatIndex];
}

function renderResults() {
  resultsPannelUlElem.innerHTML = '';
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Goat Likes';
  resultsPanelUlElem.appendChild(h2Elem);
  for (let goat of Goat.allGoats) {
    const liElem = document.createElement('li');
    liElem.textContent = `${goat.name} : ${goat.votes}`;
    resultsPanelUlElem.appendChild(liElem);
  }
}

function handleClick(e) {
  console.log('I am listening');
  let thingTheyClickedOn = e.target;
  console.log(thingTheyClickedOn);
  //we need t oaccount for votes
  if (voteCounter < 10) {
    if(thingTheyClickedOn === leftGoatImageTag || thingTheyClickedOn === rightGoatImageTag) {
      // count the vote aka increment vote count
      voteCounter++
      // add to the goat they clicked ons votes
      if(thingTheyClickedOn === leftGoatImageTag) {
        currentLeftGoat.votes++;
      } else {
        currentRightGoat++;
      }
      // render new goats
      pickGoats();
      renderTwoGoats(currentLeftGoat, currentRightGoat);
    } else {
      alert('You really missed the goat!');
    }
  } else {
    gotImageSectionTag.removeEventListener('click', handleClick);
    // alert('This is where we would render our results')
    renderResults();
  }
}

// add a listender and a handler

goatImageSectionTag.addEventListener('click', handleClick);

// create goats using constructor


// pickGoats

pickGoats();
console.log(currentRightGoat);
console.log(currentLeftGoat);

renderTwoGoats(currentLeftGoat, currentRightGoat);
