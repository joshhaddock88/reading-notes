import React from 'react';

class Form extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleChange = (e) => {
    let city = e.target.value;
    console.log(city);
    this.setState({city})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('You ar eabout to send', this.state.city, 'to the <App />')
    // tell the app what the city is
    this.props.handleSubmit(this.state.city);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Stuff in here
        <input placeholder="City Name" onChange={this.handleChange} />
        <button>Search!</button>
      </form>
    )
  }
}

export default Form