
import React from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'user'
    }
  }

  handleFormSubmit = e => {
    // keep the form from refreshing the page, which is its default behavior
    e.preventDefault();
    console.log('submitted');
    // but what if we wanted to access specific data on form submit?
    // option A; since we've been updating state w/ username the whole time, we can access it in the state
    // immediate updating: every time the user types, the state is update, so it's always correct.
    // we needed the immediate updates for anothe feature, displaying the username in the h2.
    // downside: every time the user tpyes, we are runing a bit of code to update the state.
    // running code is what slows down the browser.
    console.log(this.state.username);
    // option B: we have not been updating the DOB.
    // upside: we don't bother keeping track of that value until we care about it.
    console.log(e.target.bootstrapFormDob.value);
  }

  handleNameTyped = e => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return(
      <>
        <h1>In-form-ation</h1>
        <h2 id="nameHeader">Welcome, {this.state.username}!</h2>
        <main>
          <form onSubmit={this.handleFormSubmit} id="myForm">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onInput={
              this.handleNameTyped
              }
              />
            <br />
            <label htmlFor="DOB">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
            <br />
            <select>
              <option value="1">1 horn</option>
              <option value="2">2 horns</option>
            </select>
            <input type="submit" value="Click me!" />
          </form>
          <Container>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group controlID="bootstrapFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group controlID="bootstrapFormDodb">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        </main>
      </>
    )
  }
}


export default App;


// differences between lab and demo =

// make a drop down menu that will filter by number of horns
// there is documentation for "select" which allows us to do drop downs.

// you can use $0 to work with what you select on the console

// on each option you can put hte value onf specifically what you want

// <option value="value"> 1 horn </ option>
