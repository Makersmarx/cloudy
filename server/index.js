// .dotenv
require('dotenv').config();

// port being used
const port = 8001;

//express
const express = require('express');

const app = express();

const session = require('express-session');

app.use(express.json);

// destructure vars from .env to use in index.js
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAg: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

// massive
const massive = require('massive');

// controller
const controller = require('./controller');

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

// endpoints

//Login:
app.post('/auth/login', controller.login);
//Register:
app.post('/auth/register', controller.register);
//Lesson:
app.get('/auth/lessons', controller.getLessons);
//Add:
app.post('/auth/lessons', controller.addLessons);
//Remove:
app.delete('/auth/lessons/:id', controller.deleteLessons);
//Logout:
app.post('/auth/logout', controller.logout);

app.listen(port, () => console.log(`Loud and Proud on Port: ${port}`));
