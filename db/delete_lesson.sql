DELETE FROM lessons
WHERE
lesson_id = $1;

SELECT *
FROM lessons
ORDER BY lesson_id;