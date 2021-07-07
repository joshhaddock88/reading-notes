```js
let name = 'Michelle';

let alphabet = 'abcdefghi';
alphabet.charCodeAt(0); // gives 97
alphabet.charCodeAt(1); // gives 98

name.charCodeAt(0); // gives 77
 let letters = ['a', 'b', 'e', 'y'];

 letters.map(letter => charCodeAt(0))
```

```js
const charCode = (arr) => arr.map(char => charCodeAt(0));
```

```js
(2 < 5) ? 'it was true' : 'it was false'; //return true
(2 > 5) ? 'it was true' : 'it was false'; //returns false.
```

```js
const evenOdd = (arr) => {
  return arr.map(element => {
    if(isNana(element)) {
      return 'N/A';
    } else {
      return (element % 2 === 0) ? 'even' : 'odd';
    }
  })
}
```

Filters: Goes through an array and give a new array with some items removed if they do not pass the test.
Callback returns true of elements that should be kept, false for elements to be removed.
```js
let fruits = ['apple', 'banana', 'cantaloupe'];

fruits.filter( fruit => fruit.length > 4) // returns full array.
fruits.filter ( fruit => fruit.length > 6) // only returns fruits[2] 'cantaloupe'
fruits.filter ( fruit => {
  if (fruit.includes('e')) {
    return true;
  } else {
    return false;
  }
})

fruits.filter ( fruit => fruit.includes('e')) // returns 'apple', 'cantaloupe'
```

