INSERT INTO users
(username,password);
VALUES
($1, $2);

SELECT user_id username From users
WHERE username = $1;