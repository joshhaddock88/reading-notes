console.log('hello from node!');

// in our servers, we use require instead of import
const express = require('express');
const app = express();
// dotenv to access our .env file
require('dotenv').config();
//all the frontend to acces data from the backend
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;
console.log('port is' + PORT)
//----------------------------------
// everything above that line is going to be the same in every code ever.

const restaurantData = require('./restaurants.json')


//specificy what routes our server sould be listening for
app.get('/', (request, response) => {
  //when we get that request, send back a response
  response.send('Hello from the server!');
});
app.get('/potato', (request, response) => {
  response.send('Potatos are delicious!');
});
app.get('/sayHello', (request, response) => {
  // query paramters allow us to send extra information to the backend
  // we access query params using request.query
  // in the URL, this looks like localhost:3001/sayHello?name=Joshua
  let name = request.query.name;
  response.send(`Hello, ${name}!`);
})

app.get('/*', (request, response) => {
  response.status(404).send('Sorry, route not found');
});

app.get('/restaurants', (request, response) => {
  // get the info from restaurants file & send it back
  // restuarnt data is require'd earlier in this file
  response.send(restaurantData.filter
    ( restaurant => ));
})

// tell our server to start listening for requests

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});

