import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
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

        <ButtonToolbar>
          <Button bsStyle="success">Buy</Button>
        </ButtonToolbar>
      </div>
    );
  }
}


ProductItem.propTypes = {
  content: PropTypes.object,
  sku: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.float,
  description: PropTypes.string,
  features: PropTypes.array,
};


export default createContainer(() => ({}), ProductItem);