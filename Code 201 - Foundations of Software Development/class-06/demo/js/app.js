'use strict'

const kittenFrankie = {
  name: 'Frankie',
  age: null,
  interests: ['sleeping', 'high places', 'laser lights'],
  isGoodWithKids:  true,
  isGoodWithDogs: false,
  isGoodWithCas: true,
  photo: 'image file path'
  setAge: function() { //convention says that a method which sets the value of a property be called "set"
    this.age = randomAge(3,12) + ' months'; //contextual this
    console.log(this.age);
  }
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(kittenFrankie.setAge());
// console.log(kittenFrankie);

const kittenDivElem = document.getElementById('kittenProfiles');
// console.log(kittenDivElem);

function makeKittenArticle(kitten) {
  const articleElem = document.createElement('article')
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

makeKittenArticle(kittenFrankie);