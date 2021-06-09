import './App.css';
import React from 'react';
import HouseholdItem from './HouseholdItem.js';
import hornedBeastData from './resources/data.json';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>TP Tracker</h1>
        <HouseholdItem name="Toilet Paper" />
        <HouseholdItem name="Bell Peppers" />
        <HouseholdItem name="Paper Towels" />
      </>
    )
  }
}

export default App;

// Look for cards/columns