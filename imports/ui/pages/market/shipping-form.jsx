import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingCost: 5.99,
    };

    this.updateShipping = this.updateShipping.bind(this);
    this.confirmForm = this.confirmForm.bind(this);

  }

  updateShipping(e) {

    const standardShipping = 5.99;
    let newShipping;

    switch(e.target.value) {
      case 'MN':
        newShipping = 0.00;
      break;
      case 'NY':
      case 'CA':
      case 'MA':
        newShipping = standardShipping + 7.50;
      break;
      case 'GA':
      case 'AL':
      case 'FL':
        newShipping = 3.99;
      break;
      default:
        newShipping = 5.99;
    }

    this.setState({ shippingCost: newShipping });
  }

  calcTotal() {
    return ( (this.state.shippingCost + this.props.itemInfo.price).toFixed(2) );
  }

  confirmForm(e) {

    let isValid = true;
    const formElem = document.getElementById('contact-form').elements;

    _.find(formElem, function(elem) {
      if (elem.hasAttribute('required') && elem.value === '') {
        isValid = false;
        return true
      }
    });

    if (isValid) {
      Session.set('customer_name', formElem.customer_name.value)
      FlowRouter.go('/thank-you');
    }
  }

  render() {
    if (this.props.loading) return null;
    return (
      <div id="conShippingForm" className="animated fadeInDown">

        <div id="conCart">
          <h3>{this.props.itemInfo.name}</h3>
          <p>Sub-total: ${this.props.itemInfo.price}</p>
          <p>Shipping: ${this.state.shippingCost}</p>
          <hr />
          <p>Total: ${this.calcTotal()}</p>
        </div>

        <div id="conContactInfo">
          <form id="contact-form" className="form-inline">
            <div><input name="customer_name" className="form-control full-width" type="text" placeholder="Name" required /></div>
            <div><input name="address" className="form-control full-width" type="text" placeholder="Street" required /></div>
            <div className="form-group">
              <input name="city" className="form-control" type="text" placeholder="City" required />
              <select name="state" className="form-control" onChange={this.updateShipping} required >
                <option value="">State</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>
            <div><input name="zipcode" className="form-control full-width" type="text" placeholder="Zip Code" required /></div>

            <button className="btn btn-success pull-right" onClick={this.confirmForm}>Confirm</button>
          </form>
        </div>

      </div>
    );
  }
}

ShippingForm.propTypes = {
  sku: PropTypes.string,
};


export default createContainer(({ sku }) => {

  const itemHandle = Meteor.subscribe('products.item', sku);
  let itemInfo;
  let loading = !itemHandle.ready();

  if (!loading) {
    itemInfo = Products.findOne();
  }

  return {
    loading,
    itemInfo
  }
}, ShippingForm);