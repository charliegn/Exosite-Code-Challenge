// All products-related publications

import { Meteor } from 'meteor/meteor';
import { Products } from '../products.js';

Meteor.publish('products.all', function () {
  return Products.find({});
});

Meteor.publish('products.item', function (sku) {
  return Products.find({_id: sku});
});
