console.log('hello from node!');

// in our servers, we use require instead of import
const express = require('express');
const app = express();

//specificy what routes our server sould be listening for
app.get('/', (request, response) => {
  //when we get that request, send back a response
  response.send('Hello from the server!');
});
app.get('/potato', (request, response) => {
  response.send('Potatos are delicious!');
})

// tell our server to start listening for requests

app.listen(3001, () => {console.log('Listening on port 3001')});

