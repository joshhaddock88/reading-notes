Reduce: Returns anything you want.

Array -> () -> "Any data type"

Array is a classs.

So

```js
let nums = [1, 2, 3, 4];
// same as

let number = new Array ();

// nums is an instance of Array()

// Accumulator, current Value, Current Index

// Reduce Args: callback function, initial state.
let initialState = []
let evens = nums.reduce( (currentState, value, index) => {
  if ( ! value % 2) {
    currentState.push(value);
  }
  return currentState;
} initialState)
//^ same as

let evens = nums.reduce ( (state, value, index) => {
  
}, [] ) // gives back [2, 4]
```
```js
let initialState = '';
let sentence = nums.reduce ( (currentState, value, idx) => {
  return currentState + value;
}, initialState ) // gives back [1, 2, 3, 4]
```

When you return something you either return it, or some modification of it.

```js
let pokemon = results.reduce (( currentState, value) => {
  // value is 
  //{
  //  "name": "bulbasaur",
  //  "url": "hrrps://pokeapi.co/api/v2/pokemon/1/"
  //}
  currentState[pokemon.name] = pokemon.url;
}, {});
```

User + Enter

|

Computer -> Router

|

Router -> Modem

|

Modem -> Street

|

DNS Server -> (30 steps)

|

DV to get IP ------>
|
IP - > Switch

|

Grid *(many steps)

|

server farm

|

mapping - finds machine

|

Gie me cats

|
 -> rinse + repeat

### Asynchronous Code

Sync = in order
A-Sync = no ordered

App
  1. Render a component
  2. get API data 
  3. Render data
  
  Steps 2 and 3 have to happen in order, but time is an unknown variable.
  4. render other stuff

  How it typically runs though is
  (1) -> (4) -> (2) -> (3)

  It will do 1, 2, start 3 but realizes it's inaccessible and puts it to the side, does task for. When task 2 is done it will return to 3.

  It does things in order of the stack until it can't. Instead of waiting for things to finish it just lets code run on its own.

  ```js
  const axios = requires('axios');
  // React equivalent: import axios from 'axios';

  console.log('Getting Data');

  getData();

  console.log( getData() );

  async function getData() {
    const results = await axios.get
    ('https://pokeapi.co/api/vs/pokemon');
    console.log('got it');
    return results;
  }
  ```

  you're asking the api for one part of it's data.

Like the Fenway Park scoreboard. The {} are like the little squares.

Key value pairs = Query String

-- url 'https://u1.locationiq.com/v1/search.php?key=YOUR_ACCESS_
        Protocol    Domain         Resource      Query String
