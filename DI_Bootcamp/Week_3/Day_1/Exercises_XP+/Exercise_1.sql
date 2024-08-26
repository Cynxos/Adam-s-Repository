-- CREATE TABLE students (
--     ID SERIAL PRIMARY KEY,
--     first_name VARCHAR(255),
--     last_name VARCHAR(255),
-- 	birth_date VARCHAR(255)
-- )

-- ALTER TABLE students
-- ALTER COLUMN birth_date TYPE date using to_date(birth_date, 'DD-MM-YYYY');

-- INSERT INTO students (first_name, last_name, birth_date) VALUES ('Marc', 'Benichou', '02/11/1998');
-- INSERT INTO students (first_name, last_name, birth_date) VALUES ('Yoan', 'Cohen', '03/12/2010');
-- INSERT INTO students (first_name, last_name, birth_date) VALUES ('Lea', 'Benichou', '27/07/1987');
-- INSERT INTO students (first_name, last_name, birth_date) VALUES ('Amelia', 'Dux', '07/04/1996');
-- INSERT INTO students (first_name, last_name, birth_date) VALUES ('David', 'Grez', '14/06/2003');
-- INSERT INTO students (first_name, last_name, birth_date) VALUES ('Omer', 'Simpson', '03/10/1980');

-- SELECT * FROM students

-- SELECT first_name, last_name FROM students WHERE id = 2;

-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

-- SELECT first_name, last_name FROM students WHERE id IN (1, 3);

SELECT * FROM students WHERE birth_date >= '01/01/2000'