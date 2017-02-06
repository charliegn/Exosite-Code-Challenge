import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="market" className="active">Market</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </nav>
    );
  }
}

