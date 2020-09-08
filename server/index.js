// .dotenv
require('dotenv').config();

// port being used
const port = 8001;

// destructure vars from .env to use in index.js
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

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

app.listen(port, () => console.log(`Loud and Proud on Port: ${port}`));
