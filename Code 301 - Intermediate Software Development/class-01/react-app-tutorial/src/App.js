// deleted imported logo.svg
import React from 'react';
// import our compoentn from our file.
import FunFact from './FunFact.js'
import './App.css';
// deleted function layout

// this is the syntax you'll use in every project. Memorize this.
class App extends React.Component {
  render() {
    return (
      <>
        <h1>This is my app!</h1>
        <h2>What makes React cool?</h2>
        {/* Using my component */}
        <FunFact title="Components" body="Componenets are helpful for reusing code."/>
        <FunFact title="Popular" body="React is used by SO Many companies."/>
        <FunFact title="Modular" body="React makes it easier for LOTS of developers to work on a project together."/>
      </>
    )
  }
}

export default App;