Databases!

They let us store data i na persistent way, in a way that doesn't stop just because our server stops.

MySQL
PostreSQL
SQLite

MongoDB: the noSQL database we will be using
- The individual pieces of data we store are called documents.
- Data we store is key/value pairs
- We will use Mongoose(library) within our Express apps to access Mongo.
- MongoDB runs on your computer separately from your server.

```js
/// npm install mongoose
/// database stuff
// sudo service mongodb start

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})



//quickstart guide
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('succesfully connected to mongo');
})

const Kitten = require('./kittens')

// set up the data model/template
const kittySchema = new mongoose.Schema({
  name: String,
  color: String,
  email: String
});


// create teh class/constructor. Just another step.
const Kitten = mongoose.model('Kitten', kittySchema);

// use the constructor to make an instance.
let myCoolCat = new Kitten({
  name: 'shadow',
  color: 'gray',
  email: 'joshhaddock88@gmail.com'
});



// actually save the cat data into MongoDB.
myCoolCat.save( (err, catDataFromMongo) => {
  console.log('saved the cat');
  console.log(catDataFromMongo);
});
//search with db.find

// test route. We don't typically want a user to see all of the data in a system.
app.get('/allofthecats', (req, res) => {
  Kitten.find({}, (err, kittens) => {
    console.log(kittens);
    res.send(kittens);
  });
});

// actual route: get the cats that belong t oone user
app.get('/cats', (req, res) => {
  let userEmail = req.query.email;
  Kitten.find({email: userEmail}, (err, kittens) => {
  console.log(kittens);
  res.send(kittens);
  });
})

```

// code that should run ONCE, when the component appears on the page, goes in ComponentDidMount
async componentDidMount() {
  let catData = await axios.get('http:/localhost:3001/cats?email=${this.props.autho0.user.email}')
  console.log(catData);
  this.setState({catData: catData.data})
}

{this.state? this.state.catData.map(cat => <h4 key={cat._id}>{cat.name},  a {cat.color} cat</h4>) : ''}

new code to add.
in axious.get()
```js
let catData = await axios.get(`http://localhost:3001/cats`)
```

```js
 /world/.test('hello world!');// true
 /h...o/.test('hello world!'); // true

```
```js
/aaaa/.test('aaaaaaaaa') // true
/baaaaaab/.test('baaab') // false
/ba{3,5}b/.test('baaab') // true
/\d[A-Z]/.test('0Z') // true
// \d says a number first.
/b\d{3,7}b/.test('b12345') // true
```
```js
/ba*b/.test('bab') //true, would work on bb and baaaaaaaab
/ba+b/.test // works on any number of a's/
/ba?b/.test //works on 0 to 1 instances.


// sudo curl -s https://raw.githubusercontent.com/mongodb/mongo/master/debian/init.d -o /etc/init.d/mongod
//sudo chmod 755 /etc/init.d/mongod
//sudo service mongod start