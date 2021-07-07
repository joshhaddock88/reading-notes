
import './App.css';
import React from 'react';
import CityForm from './CityForm';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: {},
      errorMessage: ''
    }
  }

  getCityData = (city) => {
    console.log(city);
    try {
      // inside is what we want to happen, in the wood/working case
      let cityData = axios.get(`https://us1.locationiq.com/v1/search/php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`)
      console.log(cityData);
  
      this.setState = ({
        city: cityData.data[0]
      })
      
    } catch (err) {
      console.log('We caught an error', err);
      this.setState({
        errorMessage: `${err.message}: ${err.response.data.error}`
      })
    }

  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <h2>Explore a city</h2>
        <CityForm
          getCityData = {this.getCityData}
        />
        {this.state.errorMessage ? <h3>{this.state.errorMessage}</h3> : ''}
        {this.state.city.display_name ? 
        <Jumbotron>
          <h3>{this.state.city.display_name} at {this.state.city.lat}, {this.state.city.lon}
          </h3>
          <img src={`https://maps.locationiq.com/v3/staticmap?`} />
        </Jumbotron> : ''}
      </>
    )
  }
}


export default App;
