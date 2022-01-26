import React from 'react';

class Restaurants extends React.Component{
  render() {
    console.log('Rendering...', this.props.list)
    return (
      <section>
        <h3>Restaurants...</h3>
        <ul>
          {
            this.props.map( (value, index) => {
              // map takes a callback function as an argument.
              return (
                <li key={index}>
                  <p>Name: {value.restaurant}</p>
                  <p>Serves: {value.cuisine} cuisine in {value.locality}</p>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default Restaurants