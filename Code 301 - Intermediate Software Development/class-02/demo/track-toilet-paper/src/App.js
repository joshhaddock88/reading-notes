import './App.css';
import React from 'react';
import HouseholdItem from './HouseholdItem.js';
import AboutTheApp from './AboutTheApp.js';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    // set up my state
    this.state = {
      funds: 100
      shouldShowModal: false
    };
  }

  spendMoney = cost => {
    this.setState({
      funds: this.state.funds - cost
    })
  }

  showModal = () => {
    this.setState({
      shouldShowModal: true
    })
  }

  hideModal = () => {
    this.setState({
      shouldShowModal: false
    })
  }

  render() {
    let items = [
      {name: 'Toilet Paper', cost: 1}, 
      {name: 'Bell Peppers', cost: 0.75}, 
      {name: 'Paper Towels', cost: 2.5}
    ];
    return (
      <>
        <h1>TP Tracker</h1>
        <h2>Current budget: ${this.state.funds}</h2>
        <Button onClick={this.showModal}>About the App</Button>
        <AboutTheApp shouldShowModal=
        {this.state.shouldShowModal}
        hideModal={this.hideModal}
        />
        {
          items.map(item => <HouseholdItem 
            name={item.name} 
            cost={item.cost}
            handleBuyItem={this.spendMoney}
          />)
        }
      </>
    )
  }
}

export default App;

