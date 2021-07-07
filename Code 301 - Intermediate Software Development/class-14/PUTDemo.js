// server

app.get('/allofthecats', catHandlers.allOfTheCats);
app.get()



// Modularize


let updateCat = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, function(err, user) {
    if(err) {
      res.status(500).send('invalid token');
    } else {
      Kitten.findOne({_id: req.params.id, email: user.email}).then(foundKitten => {
        console.log(foundKitten);
        //update that kitten
        //send back updated data
        foundKitten.name = req.body.name;
        foundKitten.color = req.body.color;
        foundKitten.save().then(savedkitten => res.send(savedKitten));
      });
    }
  });
};

//export as object
module.exports = {
  allOfTheCats: findCatsByEmail, addCat, deleteCat, updateCat
}

//Front end
import UpdateForm from 'place';

  constructor(props) {
    super(props) {
      shouldShowUpdate: false
    }
  }

<Button onClick={ () => this.updateCate(cat)}>Update</Button>

updateCat = async (caInfo) => {
  this.setState({
    shouldShowUpdate: true;
    catToUpdate: catInfo
  })
}

sendCatUpdate = async(e) => {
  e.preventDefault();
  let config = await this.getConfig();
  let dataToUpdate = {
    name: e.target.updatename.value,
    color: e.target.updateColor.value
  }
  console.log(dataToUpdate);
  let response = await axios.put(`http://localhost:3001/cats/${this.state.catToUpdate._id}`, dataToUpdate, config);
  console.log(response);

}

<UpdateForm
sendCat


// Update Form, from end
import React from 'react';

class UpdateForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.updateCat}>
        <h3>Update Form</h3>
        <label htmlFor="updatename" >Name</label>
        <input id="updateName" defaultValue={this.props.cat.name}/>
        <label htmlFor="updateColor" >Color</label>
        <input id="updateColor" defaultValue={this.props.cat.color}/>
      </form>
      {this.state.shouldShowUpdate ? <UpdateForm cat={this.state.catToUpdate} /> : ''}
    )
  }
}

export.default.UpdateForm