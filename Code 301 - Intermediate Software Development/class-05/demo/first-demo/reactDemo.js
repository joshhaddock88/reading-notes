import React from "react";
import Form from "../Form.js";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      age: 0,
      person: ""
    };
  }

  handleChangeAge = (event) => {
    let age = event.target.value;
    this.setState({ age })
  };

  handleChangeperson = (event) => {
    let person = event.target.value;
    this.setState({ person })
  }
  render() {
  return (
      <>
        <Form
        changeAge={this.handleChangeAge}
        changePerson={this.handleChangePerson}
        />
      </>
    );
  }
}