const express = require('express');
const app = express();
app.use(express.json());

//req(doteenv.config()) <----- typically necessary, not here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/plants', {useNewUrlParser: true, use unifiedTopology: true});

const plantSchema = mongoose.Schema({
  habitat: String,
  height: Number
});

const Plant = mongoose.model(plantSchema);

app.get('/', (req, res) => {
  res.send('yo');
});

app.get('/plans', (req,res) => {
  Plant.find({}, (err, foundPlants) => {
    res.send(foundPlants);
  });
});

app.post('/plants', (req, res) => {
  let plant = new Plant ({
    habitat: 'Window sill',
    height: 30
  });
  plant.save().then(savedPlany => {
    res.send(savedPlant);
  });
});

app.delete('/plants/:potato', (req, res) => {
  Plant.deleteOne({_id: req.params.potato}).then(() => {
    res.send('deleted');
  })
})

app.listen(3001, () => console.log('listening on 3001'));
