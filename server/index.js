// .dotenv
require('dotenv').config();

// port being used
const port = process.env.SERVER_PORT || 5000;

// destructure vars from .env to use in index.js
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  STRIPE_PRIVATE_KEY,
} = process.env;

//express
const express = require('express');

const app = express();

const session = require('express-session');

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

// massive
const massive = require('massive');

// massive connecting to db

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set('db', db);
    console.log('This base is connected');
  })
  .catch((err) => console.log(err));

// controller
const controller = require('./controller');

// endpoints

//Auth Endpoints:
app.post('/auth/login', controller.login);
//Register:
app.post('/auth/register', controller.register);
//Users:
app.get('/auth/user', controller.getUser);
//Logout:
app.delete('/auth/logout', controller.logout);

//Lesson Endpoints:
app.get('/api/lessons', controller.getLessons);
//Add:
app.post('/api/lessons', controller.addLessons);
//Remove:
app.delete('/api/lessons/:id', controller.deleteLessons);

// Stripe

bodyParser = require('body-parser');

stripe = require('stripe')(STRIPE_PRIVATE_KEY);

app.use(bodyParser.json());

app.post('/api/payment', (req, res, next) => {
  // If needed, convert req.body.amount to pennies

  const charge = stripe.charges.create(
    {
      amount: req.body.amount,
      currency: 'usd',
      source: req.body.token.id,
      description: 'Stripe Checkout test charge',
    },
    function (err, charge) {
      if (err) return res.sendStatus(500);
      else return res.status(200).send(charge);
    }
  );
});

app.listen(port, () => console.log(`Loud and Proud on Port: ${port}`));
