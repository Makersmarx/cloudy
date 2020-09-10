const bcrypt = require('bcrypt');

module.exports = {
  login: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const user = await db.check_user(username);
    if (!user[0]) {
      return res.status(401).send('Incorrect Login');
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          userId: user[0].user_id,
          username: user[0].username,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send('Username or Password Incorrect');
      }
    }
  },

  register: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const foundUser = await db.check_user(username);
    console.log(foundUser);

    if (foundUser[0]) {
      return res.status(409).send('User Already Exists');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await db.new_user([username, hash]);

    req.session.user = {
      userId: newUser[0].user_id,
      username: newUser[0].username,
    };

    res.status(200).send(req.session.user);
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  // Add/Delete/Get Lessons
  getLessons: async (req, res) => {
    const db = req.app.get('db');
    const lessons = await db.get_lessons();
    res.status(200).send(lessons);
  },

  addLessons: async (req, res) => {
    const { title, lesson, content } = req.body;
    const db = req.app.get('db');
    const lessons = await db.add_lessons([title, lesson, content]);
    res.status(200).send(lessons);
  },
  deleteLessons: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    const lessons = await db.delete_lessons([id]);

    res.status(200).send(lessons);
  },
};
