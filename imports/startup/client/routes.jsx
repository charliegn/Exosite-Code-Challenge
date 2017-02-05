import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// Import needed templates
import { Layout } from '/imports/ui/layouts/';
import { Market } from '/imports/ui/pages/market/market.jsx';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.market',
  action() {
  	console.log('router running');
    mount(Layout, { content: <Market /> });
  },
});