import React from 'react';
import Form from 'react-bootstrap/Form'

class CityForm extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
    this.props.getCityData(e.target.city.value);
  }
  render () {
    return (
      <>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group controlID="city">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button type="submit">Explore!</Button>
        </Form>
      </>
    )
  }
}

export default CityForm