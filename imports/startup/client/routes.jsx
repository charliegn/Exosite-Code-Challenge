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
    FlowRouter.go('App.market');
  },
});

FlowRouter.route('/market', {
  name: 'App.market',
  action() {
  	delete Session.keys['itemSku'];
    mount(Layout, { content: <Market /> });
  },
});

FlowRouter.route('/shipping-form/', {
  name: 'App.shipping_form',
  action() {
  	if (!Session.get('itemSku')) {
			FlowRouter.go('/market');
  	}
    mount(Layout, { content: <ShippingForm sku={Session.get('itemSku')} /> });
  },
});