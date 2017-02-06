import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="conProductItem">
        <h3>{this.props.name}</h3>
        <h4>{this.props.price}</h4>

        <button className="btn btn-success">Buy</button>
      </div>
    );
  }
}


ProductItem.propTypes = {
  content: PropTypes.object,
  sku: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  features: PropTypes.array,
};


export default createContainer(() => ({}), ProductItem);