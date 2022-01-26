'use strict'
const allKittens = []
//add consturcor function to make kittens
function Kitten(name, photo, interestsArr, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.name = name;
  this.photo = photo;
  this.interestsArr = interestsArr;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;

  allKittens.push(this);
}

Kitten.prototype.setAge = function() {
  console.log(this.age);
  this.age = randomAge(3,12) + ' months';
  console.log(this.age);
}

let kittenFrankie = new Kitten ('Frankie', './images/frankie.jpg', ['sleeping', 'high places', 'lazer lights'], true, false, true);
kittenFrankie.setAge();

let kittenSerena = new Kitten('Serena', 'img', ['pets', 'scratches', 'hissing'], false, false, false);
kittenSerena.setAge();

let kittenJumper = new Kitten('Jumper', 'img', ['treats', 'pets', 'jumping'], true, false, true);
kittenJumper.setAge();

// const kittenFrankie = {
//   name: 'Frankie',
//   age: null,
//   interests: ['sleeping', 'high places', 'laser lights'],
//   isGoodWithKids:  true,
//   isGoodWithDogs: false,
//   isGoodWithCas: true,
//   photo: 'image file path'
//   setAge: function() { //convention says that a method which sets the value of a property be called "set"
//     this.age = randomAge(3,12) + ' months'; //contextual this
//     console.log(this.age);
//   }
// }

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(kittenFrankie.setAge());
// console.log(kittenFrankie);

const kittenDivElem = document.getElementById('kittenProfiles');
// console.log(kittenDivElem);

function renderKitten(kitten) {
  let name = kitten.name
  const articleElem = document.createElement('article')
  articleElem.setAttribute('id', name);
  kittenDivElem.appendChild(articleElem);

  // make image element and add the link
  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', kitten.photo);
  articleElem.appendChild(imgElem);

  // make h2 element
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = kitten.name;
  articleElem.appendChild(h2Elem);
  
  //set kitten age
  kitten.setAge();
  // make a p tag
  const pElem = document.createElement('p');
  pElem.textContent = `age: ${kitten.age}`;
  articleElem.appendChild(p);
  console.log(kittenDivElem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ul);

  for (let i = 0; i < kitten.interests.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = kitten.interests[i];
    ulElem.appendChild(liElem)
  }
}


// function add table

function addTable(kitten) {
  let name = kitten.name;
  const articleElem = document.getElementById(name);

  //create a table element
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem)

  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  const tr2Elem = document.createElement('tr');
  tableElem.appendChild(tr2Elem);

  let th1Elem = document.createElement('th');
  th1.textContent = 'Kids';
  trElem.appendChild(th1Elem)

  let td1Elem = document.createElement('td');
  td1Elem.textContent = kitten.isGoodWithKids;
  tr2Elem.appendChild(td1Elem);

  let th2Elem = document.createElement('th');
  th2.textContent = 'Dogs';
  trElem.appendChild(th2Elem)
  
  let th3Elem = document.createElement('th');
  th3.textContent = 'Cats';
  trElem.appendChild(th3Elem)

}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.photo.value);
  let formName = event.target.name.value;
  let age = event.target.age.value;
  let interestsString = event.target.interests.value;
  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithCats = event.target.isGoodWithCats.checked;
  interestsString = interestsString.split(',');

  let newKitten = new Kitten(formName, age, interestsString, isGoodWithKids, isGoodWithDogs, isGoodWithCats);
  newKitten.getAge();
  newKitten.renderKitten();
  // a common programming pattern is to wipe out ALL content in a secion and re-render all of it.
}

renderKitten(kittenFrankie);
addTable(kittenFrankie);

//identify a target to list to
const formElem = document.getElementById('addKittenForm');
//identify the even we wnat to listn for
//attach an event listener
formElem.addEventListener('submit', handleSubmit)
// I heard submit!!!
// I know what to do: handleSubmit(event);
// a callback function is a reference to a function that we will call when appropriate
// handle the event
// write the handle submit function
// event handlers always come with an event passed in as an argument.
event.target.reset();

function renderAllKittens() {
  for(let i = 0; i < ki)
}