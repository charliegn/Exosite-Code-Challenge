import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'react-meteor-data';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="nav">
        <ul>
          <li>Nav Item 1</li>
          <li>Nav Item 2</li>
          <li>Nav Item 3</li>
        </ul>
      </div>
    );
  }
}

// Navigation.propTypes = {
//   content: PropTypes.object,
//   navName: PropTypes.string,
// };

/******************************************************************
// Data Container
******************************************************************/
export default createContainer(() => ({}), Navigation);
