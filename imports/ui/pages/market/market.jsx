import React, { Component } from 'react';
import _ from 'underscore';
import { createContainer } from 'meteor/react-meteor-data';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div id="conMarket">
        <h1>Your Market is here</h1>
      </div>
    );
  }
}

export default createContainer(() => ({}), Market);