import './App.css';
import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Restaurants from './components/Restaurants';
import Map from './components/Map';

import locationData from './pretendServer/location.json';
import restaurantData from './pretendServer/restaurans.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      restaurants: [],
      displayResults: false
    }
  }

  getCityData = (cityName) => {
    console.log('Thank you, lets get that city:', cityName);
    // Take cityName and go to the API, get the stuff, and do work with is...
    // return us the location, lists of things to do, a map url

    // Yeah! We got data from the server!
    this.setState({restaurants: restaurantData, location: locationData, displayResults : true});
  }

  render() {
    return(
      <>
        <Header />
        <Form handleSubmit={this.getCityData}/>
          
          {
            this.statedisplayResults ? <div>John is cool</div> : <div>John is Bald</div>
          }
          
          {
            this.state.displayResults &&
            <>
              <Map location={this.state.location}/>
              <Restaurants list={this.state.restaurants}/>
            </>
          }
        <Footer />
      </>
    )
  }
}


export default App;
