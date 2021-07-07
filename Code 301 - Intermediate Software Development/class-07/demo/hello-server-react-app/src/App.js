import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      potatoInfo: ''
    }
  }

  onButtonClick = async (e) => {
    //make a request to our server
    let potatoInfo = await axios.get('http://localhost:3001/potato')
    console.log(potatoInfo)
    // save that infor into the state
    this.setState ({
      potatoInfo: potatoInfo.data
    })
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <button onclick={this.onButtonClick}>Get the data</button>
        <h3>{this.state.potatoInfo}</h3>
      </>
    )
  }
}

export default App;
