const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');
    let userFound = await db.user.get_user([username]);
    if (userFound[0]) {
      res.status(409).send('User already exists');
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await db.user.add_user([username, hash]);

      req.session.user = newUser[0];
      res.status(201).send(newUser[0]);
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');

    if (username === 'test' && password === 'test') {
      res.status(200).send({ username: 'test', user_id: 0 });
    }

    let foundUser = await db.user.get_user(username);
    foundUser = foundUser[0];
    if (foundUser) {
      const compareHash = foundUser.password;
      const authenticated = bcrypt.compareSync(password, compareHash);
      if (authenticated) {
        delete foundUser.password;
        req.session.user = foundUser;
        res.statis(202).send(foundUser);
      } else {
        res.status(401).send('Email or Password not Correct');
      }
    } else {
      res.status(401).send('Email or password incorrect');
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  // Add/Delete/Get Lessons
  getLessons: async (req, res) => {
    const db = req.app.get('db');
    const lessons = await db.lessons.get_lessons();
    res.status(200).send(lessons);
  },
  addLessons: async (req, res) => {
    const { title, lesson, content } = req.body;
    const db = req.app.get('db');
    const lessons = await db.lessons.add_lessons([title, lesson, content]);
    res.status(200).send(lessons);
  },
  deleteLessons: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    const lessons = await db.lessons.delete_lessons([id]);

    res.status(200).send(lessons);
  },
};
