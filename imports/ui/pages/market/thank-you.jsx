import React, { Component, PropTypes } from 'react';

export default class ThankYou extends Component {
  render() {
    return (
      <div id="conThankYou" className="animated zoomIn">
        <h2>Thank you {this.props.name}!</h2>
        <p>We want to thank you for your purchase. Please visit us again.</p>
      </div>
    );
  }
}

ThankYou.propTypes = {
  name: PropTypes.string,
};
