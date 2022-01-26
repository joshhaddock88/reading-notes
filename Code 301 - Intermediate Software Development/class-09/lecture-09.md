# Things that are Not Great in Code

## Absolutely Necessary

- errors
- bugs

## Definitely A Good Idea

- imporoper indentation
- really long files
- unclear variable names
- lack of comments
- multifunctional functions
- unclear variable names
- repetition/not DRY
- inconsistency in types of functions used
  - inconsistency in how we declare variables (let/const vs var)
- poor organization.

## Nice To Have

- dead code
- too much whitespace
- too little whitespace
- swear words
- unused variables/imports

# What is refactoring?

You don't change the what the code does, but you change how it looks/functions under the hood.

```js
function sayName(person) {
  if (person.age >= 50) {
    return person.getName().toUpperCase();
  } else {
    return person.getname().toLowerCase();
  }
}
```
not ideal^

```js
function betterName(person) {
  let name = person.getName();
  if(person.age >= 50) {
    return name.toUpperCase();
  } else {
    return name.toLowerCase();
  }
}
```
Better, but could still be shorter
```js
function bestname(person) {
  let name = person.getName();
  return (person.age >= 50) ? name.toUpperCase() : name.toLowerCase();
}
```

Promises

instead of using async and await
You can set up what happens when .get is over
```js
onFormSubmit = (e) => {
  e.preventdefault();
  console.log('before axios.get')
  axios.get(`${process.env.REACT_APP_SERVER}`)
    .then(pictureData => {
      console.log('inside of .then')
      console.log(pictureData);
      
      this.setState({
        pictures:pictureData.data
      });
    })
    .catch(eer => {
      console.log('there was an error', err);
    })
    console.log('after the axios.get');
}
```

The other thing that can happen is the technical term "Call back hell"

You can end up getting really deep and indented.

It can be very helpful and powerful to split larger files into different modules so that each files can be easier to read.

The most important and cleanest


```js
const getPictures = require('./filepath');
```
^this to set up modularization. Then you need to export it.
```js
module.exports = getPictures;
// When someone requires this file, give them the getPictures function.
// The power here is that other files don't have access to the full file. They'll only get access to what you tell them.
```

Making seperate folders is important. Make seperate folders for routeHandlers, Models etc.

