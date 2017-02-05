import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Navigation from './navigation';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <main>{this.props.content}</main>
      </div>
    );
  }
}

Layout.propTypes = {
  content: PropTypes.object,
};

export default createContainer(() => ({}), Layout);
