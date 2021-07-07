import React from 'react';
import axios from 'axios';

class City extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayName: ''
    };
  }

  handleChange = (e) => {
    // Capture what they typed
    // setState(...)
    this.setState({ city: e.target.value })
  }

  handeSubmit = async (e) => {
    e.preventDefault();
    // use this.state.city to: get data abotu the city (lat/lon)
    const key = process.env.REACT_APP_CITY_KEY;

    let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}=SEARCH_STRING&format=json`;

    const response = await axios.get(URL);
    console.log(response);
    
    const cityInformation = response.data[0]
    //Interesting Things: cityInformation.lat & .lon
    //These may help you get a map or food or weather.

    let displayName = cityInformation.display_name;
    this.setState({displayName});

    console.log(cityInformation);
  }

  render () {
    return (
      <>
        <div> Type in a city name</div>
        <form onSubmit={this.handleSubmit}>
          <input name="city" onChange={this.handleChange} />
          <button>Get City Info</button>
        </form>
        <h2>{this.state.displayName}</h2>
      </>
    )
  }
}

export default City

//Lab gives Api's you need.
//locationiq.com will give you your longitude and latitude
//You will need to create an account.
//API's will require a login. They will require some kind of key. This will give you access to their data.
//DOCS