import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class AboutTheApp extends React.Component {
  render() {
    return(
      <>
        <Modal show={this.props.shouldShowModal} onHide={this.props.hideModal} >
          <Modal.Header closeButton>This is the modal.</Modal.Header>
          <Modal.Body>
            Our app helps you track household expenses & inventory.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default AboutTheApp

// How to organize React

// Constructor first
// (lifecycle);
// handlers/state updaters
//render function last

// It's worth renaming variables etc to keep track of items.