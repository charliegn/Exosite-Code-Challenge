// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Products } from '/imports/api/products/products.js';
import { Random } from 'meteor/random'


Meteor.startup(() => {
  // if the Products collection is empty
  if (Products.find().count() === 0) {
    const data = [
      {
        name: 'Rollerblades',
        sku: Random.hexString(10),
        price: 72.99,
        features: ['4-wheels','heel breaks', 'power strap', 'adjustable size 1–4'],
        created: new Date(),
      },
      {
        name: 'Basketball',
        sku: Random.hexString(10),
        price: 19.99,
        features: ['WNBA Regulation','Inflatiable pump included'],
        created: new Date(),
      },
      {
        name: 'Hockey Stick',
        sku: Random.hexString(10),
        price: 25.19,
        features: ['fiberglass handle','right-handed','replaceable blads'],
        created: new Date(),
      },
      {
        name: 'Helmet',
        sku: Random.hexString(10),
        price: 86.73,
        features: ['DOT Approved','Fast clip chin strap','full-face','interchangeable windshield'],
        created: new Date(),
      },
    ];

    data.forEach(product => Products.insert(product));
  }
});