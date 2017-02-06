import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// Import needed templates
import { Layout } from '/imports/ui/layouts/';
import Market from '/imports/ui/pages/market/market.jsx';


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

// FlowRouter.route('/cart', {
//   name: 'App.cart',
//   action() {
//     mount(Layout, { content: <Market /> });
//   },
// });

// FlowRouter.route('/cart/shipping-info', {
//   name: 'App.shipping',
//   action() {
//     mount(Layout, { content: <Market /> });
//   },
// });

