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
        
        {this.props.productList.map((p) => {
          return (
            <ProductItem
              key={p._id}
              name={p.name}
              price={p.price}
              description={p.description}
              features={p.features}
            />
          );
        })}

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


  console.log('products = ', productList);

  return {
    loading,
    productList
  }


}, Market);