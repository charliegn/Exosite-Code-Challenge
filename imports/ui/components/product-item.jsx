import React, { Component, PropTypes } from 'react';
import { Session } from 'meteor/session'

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.buyItem = this.buyItem.bind(this);
  }

  buyItem(e) {    

    // Using Session here since this is a basic implementation for
    // demonstration purposes. Would use a database collection tied
    // to a user account or client-side mini-mongo storage or something
    // like that it for a fuller solution.
    Session.set('itemSku', this.props.sku);

    FlowRouter.go('/shipping-form/');

  }

  render() {
    return (
      <div className="conProductItem">
        <h3>{this.props.name}</h3>
        <h4>${this.props.price}</h4>

        <p>Features:</p>
        <ul>
          {this.props.features.map((f, index) => (<li key={index}>{f}</li>))}
        </ul>

        <button className="btn btn-success center-block" onClick={this.buyItem}>Buy</button>
      </div>
    );
  }
}


ProductItem.propTypes = {
  sku: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.array,
};


