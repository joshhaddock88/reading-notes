mongo Shell quick reference, google it.

mongo mongodb://localhost:27017/test

db.books.find
db.books.delete
db.books.deleteOne(deleteMany)
db.books.deleteOne({"name" : "The Martian"})

show dbs
(will show all databases)

use (database name)

```js
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "Susan Sample",
      age: 0,
      pets: ["Fido", "Mr Whiskers"]
    };
  }

  hadBirthday = () => {
    this.setState({
      age: this.state.age +1
      });
  };

  render() {
    return(
      <>
        <h2>{this.name}</h2>
        <h3 onClick={this.hadBirthday}>Current Age: {this.state.age}</h3>
        <h4>Pets</h4>
        <ul>
          {
            this.state.pets.map( (pet) => {
              return <li>{pet}</li>
            })
          }
        </ul>
      </>
    )
  }
}

export default App

// -----------------------------Unedited Code Below-----------------
// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     this.state = {
//       name = "Susan Sample",
//       age = {},
//       pets = {"Fido", "Mr Whiskers"}
//     };
//   }

//   hadBirthday = () => {
//     this.setState(age: age++);
//   };

//   render() {
//     <h2>{this.name}</h2>
//     <h3 onClick={this.hadBirthday}>Current Age: {this.state.age}</h3>
//     <h4>Pets</h4>
//     <ul>
//       {
//         this.state.pets.forEach( (pet) => {
//           <li>{pets}</li>
//         })
//       }
//     </ul>
//   }
// }
```

CRUD: Create, Read, Update, Delete

Read
  - Path = /cats
  - Method = GET
  - Mongoose = .find
  ^This was yesterday

Create
  - Path = /cats
  - Method = POST
  - Mongoose = new Cat(...) .save
  ^ today

Delete
  - Path = /cats/:id
  - Method = DELETE
  - Mongoose = .findAndDelete
  ^ today

Update
  - Path /cats/:id
  - Method = PUT
  - Mongoose = .find, do updates, .save
  ^ tomorrow

**New CONFIG STEP**
Goes at very top
```js
// EXCITING NEW CONFIG STEP
// this will let us access teh request body in our POST requests
app.use(express.json());



// we'll now make a post route (as opposed to get route)

app.post('/test', (req, res) => {
  console.log('at the test route');
  res.send('You hit the test route');
})

app.post('/cats', (req, res) => {
  console.log(req.body);
  const newCat = new Kitten({
    name: req.body.name,
    color: req.body.color
  });
  newCat.save((err, savedCatData) => {
    res.send(savedCatData);
  })
})
```

```js
//--------------Front End ----------------------------

async componentDidMount() {
  let rest = await axios.post('http://localhost:3001/test');
  console.log(res.data);
}


onSubmit = async e => {
  e.preventDefault();
  let data = {
    name: e.target.name.value,
    color: e.target.color.value
  }
  console.log(data);
  // second argument to post is the data fhat will be the request body.
  const responseData = await axios.post('http://localhost:3001/cats', data);
  console.log(responseData);
}

<form onSubmit={this.onSubmit}>
    <label htmlFor='name'>Cat Name</label>
    <input id="name" />
  </form>
app.get('/cats', (req, res) => {
  const token= req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {} function(err,user) {
    if(err) {
      res.status(500).send('invalid token');
    } else {
      console.log(req.body);
      const newCat = new Kitten ({
        name: req.body.name,
        color: req.body.color,
        email: user.email
      })
    }
  })
})

getToken = async() => {
  //copy paste headers
}

deleteCat = async (id) => {
  let config = await this.getConfig();
  response = await axios.delete(`http://localhost:3001/cats/${id}`)
}
```

download insomnia

4 ways t osend data t othe server
1. Query params: in the URL, afterh ? with key=value&key2=value2 etc
  - access with req.query
2. headers: authorization
  - access req.headers
3. request body: for POST requests
  - access req.body
4. URL params: in the URL, bu before the ?, as part of the path
  - http://localhost3001/cats/2342345
  - access with req.params

headers & body are the msot secure options: not in URL, so more secret as part of the request.
URL params are for things that are required, generally.
Query params are for things taht are not required or you have a lot of them.

```js
app.delete('/cats/:id', (req, res) => {
  let catId = req.params.id;

  Kitten.deleteOne({_id: catId})
    .then(deletedCatData => {
      console.log(deletedCatData);
      res.send('success deleting the cat');
    });
})

```
**Make Delete Button work**
```js
<button onclick={() => this.deleteCat(cat._id)}>Delete</button>
```