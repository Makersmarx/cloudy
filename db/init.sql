CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password TEXT,
);

CREATE TABLE lessons
(
    lesson_id SERIAL PRIMARY KEY,
    title TEXT,
    lesson TEXT,
    content TEXT,
);
