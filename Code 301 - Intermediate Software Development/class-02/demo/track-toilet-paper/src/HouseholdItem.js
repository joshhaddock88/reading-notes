import React from 'react';
import Button from 'react-bootstrap/Button';

// State helps us with keeping track of data that might change based on an event.

// Event handlers need to know 3 things.
// 1. Where they're listening (which element)
// 2. What they're listening for (which event)
// 3. What to do when the thing happens
class HouseholdItem extends React.Component {
  // the first 2 lines here are ALWAYS the same in ever React component constructor.
  // props is technically 'potato', but like 'i' in a for loop, everyone always says props.
  //call the React.Component constructor using super.
  constructor (props) {
    super(props);

      // initialize our state
    this.state = {
      numberRemaining: 0
    }
  }

  increaseNumberRemaining = () => {
    // increase the number remaining in the state by 1.
    // we CANNOT set state manually except in the constructor
    // this.state = will cause it to break.
    // We should use this.setState to update state outside of the constructor.
    this.setState({
      numberRemaining: this.state.numberRemaining + 1
    });
    // we bought something! tell App.js to remove some money
    this.props.handleBuyItem(this.props.cost);
  }

  decreaseNumberRemaining= () => {
    this.setState ({
      numberRemaining: this.state.numberRemaining - 1
    })
  }
  render() {
    return(
      <>
        <h2>{this.props.name}</h2>
        <h3>{this.state.numberRemaining}</h3>
        <button varient="primary" onClick={this.increaseNumberRemaining}>I bought one!</button>
        <button onClick={this.decreaseNumberRemaining}>I used one!</button>
      </>
    )
  }
}

export default HouseholdItem;

// in lab today we'll define a function, pass it to main, and then pass it again from main into horned beasts. At which point you'll have to use "this.props"