CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
);

CREATE TABLE lessons
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    lesson TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users (id)
);