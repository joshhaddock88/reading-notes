import React from 'react';
// remember to 'npm install axios' into your react app folder.
import axios from 'axios';

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  getPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    let pokemon = response.data.results;
    
    // shows how yo ucan fetch a 2nd thing in the same sync call
    const response2 = await axios.get('https://pokeapi.co/api/v2/pokemon/65')
    console.log(response2.data);

    // Only using the initial call
    this.setState({pokemon});
  }

  render () {
    return (
      <>
        <h1>Pokemon Go Here</h1>
        <button onClick={this.getPokemon}>Get the Pokemon</button>
        <ul>
          {
            this.state.pokemon.map( (pokemon, idx) =>
              //best practice. Use something from the data set for it's unique key. Use an ID if the data has one.
              <li key={pokemon.name}>{pokemon.name}</li>
            )
          }
        </ul>
      </>
    )
  }

}

export default Pokemon;