import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    console.log('props', this.props.sku)
  }

  render() {
    if (this.props.loading) return null;
    return (
      <div id="conShippingForm">
        
        <div id="conCart" className="clearfix">
          ITEM
        </div>

      </div>
    );
  }
}

ShippingForm.propTypes = {
  sku: PropTypes.string,
};


export default createContainer(({ sku }) => {



  let itemHandle = Meteor.subscribe('products.item', sku);
  let itemInfo;

  let loading = !itemHandle.ready();

  if (!loading) {
    itemInfo = Products.find().fetch();
  }


  console.log('products = ', itemInfo);

  return {
    loading,
    itemInfo
  }


}, ShippingForm);