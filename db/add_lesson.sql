INSERT INTO lessons
    (title, lesson, content)
VALUES
    ($1, $2, $3);

SELECT *
FROM lessons
ORDER BY lesson_id;