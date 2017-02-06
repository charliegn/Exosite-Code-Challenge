import React, { Component } from 'react';
import _ from 'underscore';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import ProductItem from '/imports/ui/components/product-item.jsx';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    if (this.props.loading) return null;
    return (
      <div id="conMarket">
        
        <div id="conProductList" className="clearfix">
          {this.props.productList.map((p, i) => {
            return (
              <ProductItem
                sku={p._id}
                key={`${p._id}_{i}`}
                name={p.name}
                price={p.price}
                features={p.features}
              />
            );
          })}
        </div>

        <p className="text-center">All products come with a 30-day money back guarantee</p>
      </div>
    );
  }
}

export default createContainer(() => {

  let productHandle = Meteor.subscribe('products.all');
  let productList;

  let loading = !productHandle.ready();

  if (!loading) {
    productList = Products.find().fetch();
  }

  return {
    loading,
    productList
  }


}, Market);