import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// Import needed templates
import { Layout } from '/imports/ui/layouts/';
import { Market, ShippingForm } from '/imports/ui/pages/market/';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    FlowRouter.go('App.market')
  },
});

FlowRouter.route('/market', {
  name: 'App.market',
  action() {
    mount(Layout, { content: <Market /> });
  },
});

FlowRouter.route('/shipping-form/:itemSku', {
  name: 'App.shipping_form',
  action({ itemSku }) {
  	console.log('itemSku', itemSku);
    mount(Layout, { content: <ShippingForm sku={itemSku} /> });
  },
});

// FlowRouter.route('/thank-you', {
//   name: 'App.shipping',
//   action() {
//     mount(Layout, { content: <ThankYou /> });
//   },
// });

