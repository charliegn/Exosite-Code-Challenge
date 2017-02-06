import React, { Component, PropTypes } from 'react';


export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.buyItem = this.buyItem.bind(this);
  }

  buyItem(e) {    

    FlowRouter.go(`/shipping-form/${this.props.sku}`);

  }

  render() {
    return (
      <div className="conProductItem">
        <h3>{ this.props.name }</h3>
        <h4>{ this.props.price }</h4>

        <ul>
          { this.props.features.map((f, index) => (<li key={index}>{f}</li>)) }
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


