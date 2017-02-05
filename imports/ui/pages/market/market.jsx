import React, { Component } from 'react';
import _ from 'underscore';

export class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="conMarket">
        <h1>Your Market is here</h1>
      </div>
    );
  }
}
