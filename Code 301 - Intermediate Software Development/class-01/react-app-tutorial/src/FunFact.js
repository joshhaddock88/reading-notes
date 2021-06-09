import React from 'react';

class FunFact extends React.Component {
  render() {
    // the info sent by the parent component shows up as props
    // we acces them with this.props._______
    // we sent a title and body from App.js
    // so now we have acces to this.props.title and this.props.body
    return (
    <>
      <h3>{this.props.title}</h3>
      <p>{this.props.body}</p>
    </>
    );
  }
}

// export so that we can use it in another file by importing
export default FunFact