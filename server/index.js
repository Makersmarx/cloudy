// .dotenv
require('dotenv').config();

// port being used
const port = 8001;

//express
const express = require('express');

const app = express();

const session = require('express-session');

app.use(express.json());

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

//Login:
app.post('/auth/login', controller.login);
//Register:
app.post('/auth/register', controller.register);
//Users:
app.get('/auth/user', controller.getUser);
//Lesson:
app.get('/api/lessons', controller.getLessons);
//Add:
app.post('/api/lessons', controller.addLessons);
//Remove:
app.delete('/api/lessons/:id', controller.deleteLessons);
//Logout:
app.post('/auth/logout', controller.logout);

app.listen(port, () => console.log(`Loud and Proud on Port: ${port}`));
