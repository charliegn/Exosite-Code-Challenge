# Exosite UI Code Challenge
A fun code challenge to build out a simple checkout UX.


## Installed NPM Packages:
- **react-dom**: Adds ReactJS compatibility within a Meteor app
- **react-mounter**: Flow Router for ReactJS Meteor app
- **meteor-random**: Love them randomized hex strings. :)
- **Other Installs**:
  - babel-runtime
  - meteor-node-stubs
  - meteor-random
  - react
  - react-addons-pure-render-mixin
  - underscore

## Additional Packages & Libraries:
- **Bootstrap 3**: Used a little bit of Bootstrap's library but also opted to hand style a lot to demonstrate CSS/LESS/SASS knowledge.
- **Animate.css**: A Pure-CSS, fun, and super simple animation library.

## How we can run it
1. Install Meteor – `curl https://install.meteor.com/ | sh` (See the [Meteor Guide](https://guide.meteor.com/#quickstart) for more info)
2. Clone repo to your local machine
2. `cd` into the `exosite-code-challenge` project
3. Install necessary npm packages – `meteor npm install`
4. Run application – `meteor`

NOTE: The data is bootstrapped in when the app first runs.  This bootstrapping process is setup in `/imports/startup/server/fixtures.js` and the Collection is created in `/imports/api/products/products.js`.

## Describe any design choices and tools
- **Meteor**:  I went Meteor for 2 reasons:
  1. There's a ton of out of the box wiring that Meteor does for you which is perfect with you're trying to code up a code challenge in one day that's backed by a database (MongoDB).
  2. I wanted to demonstrate Meteor a bit more than their Todo app. ;)
- **Bootstrap 3**: HUGE fan of Material UI but for the sake of time I went with Bootstrap because I have this library memorized so it's quicker for me...for now. ;)


## Honestly assesses for room improvement
This has been a fun code challenge. Some areas that I would improve are:
- Add the ability to build up a cart so users could add more than one item to their shopping cart.  To do this, I would add the ability to create user accounts or checkout as a guess.  I would also capture what the user is selecting to buy in mini-mongo db on the client or a local storage of some sort so that they can keep shopping around until they are ready to check out.
- I would of also add in some images of each of the items so users have a better idea of what the product is exactly before choosing to purchase.
- Provide on-the-fly user feedback on when filling out the shipping form if their information is valid or not and polish up the UX a bit more then depending on the browser's out-of-the-box functionality.
- I would add some more coloring and depth to give the sure a more visually appealing UI.
- I would make the active state on the side nav dynamic as it relates to the pages you're on.
