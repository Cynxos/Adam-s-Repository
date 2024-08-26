-- CREATE TABLE items (
--     ID SERIAL PRIMARY KEY,
--     item VARCHAR(255),
--     price INT
-- )

-- SELECT * FROM items

-- INSERT INTO items (item, price) VALUES ('Small Desk', 100);
-- INSERT INTO items (item, price) VALUES ('Large Desk', 300);
-- INSERT INTO items (item, price) VALUES ('Fan', 80);

-- CREATE TABLE customers (
--     ID SERIAL PRIMARY KEY,
--     first_name VARCHAR(255),
--     last_name VARCHAR(255)
-- 	)

-- SELECT * FROM customers

-- INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones');
-- INSERT INTO customers (first_name, last_name) VALUES ('Sandra', 'Jones');
-- INSERT INTO customers (first_name, last_name) VALUES ('Scott', 'Scott');
-- INSERT INTO customers (first_name, last_name) VALUES ('Trevor', 'Green');
-- INSERT INTO customers (first_name, last_name) VALUES ('Melanie', 'Johnson');

-- SELECT * FROM items;

-- SELECT * FROM items WHERE price > 80;

-- SELECT * FROM items WHERE price <= 300;

-- SELECT * FROM customers WHERE last_name = 'Smith';

-- SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name != 'Scott';