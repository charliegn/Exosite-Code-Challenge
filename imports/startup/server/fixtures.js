// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Products } from '/imports/api/products/products.js';

Meteor.startup(() => {
  // if the Products collection is empty
  if (Products.find().count() === 0) {
    const data = [
      {
        name: 'Item-1',
        price: 3.99,
        description: "",
        features: ['attribute-1','attribute-2','attribute-3','attribute-4'],
        created: new Date(),
      },
      {
        name: 'Item-2',
        price: 3.99,
        description: "",
        features: ['attribute-1','attribute-2','attribute-3','attribute-4'],
        created: new Date(),
      },
      {
        name: 'Item-3',
        price: 3.99,
        description: "",
        features: ['attribute-1','attribute-2','attribute-3','attribute-4'],
        created: new Date(),
      },
      {
        name: 'Item-4',
        price: 3.99,
        description: "",
        features: ['attribute-1','attribute-2','attribute-3','attribute-4'],
        created: new Date(),
      },
    ];

    data.forEach(product => Products.insert(product));
  }
});