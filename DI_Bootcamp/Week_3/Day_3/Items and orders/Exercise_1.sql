CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT,
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id) ON DELETE CASCADE
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE
);

ALTER TABLE product_orders ADD COLUMN user_id INT;
ALTER TABLE product_orders ADD FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;

INSERT INTO users (username) VALUES ('Alice'), ('Bob');

INSERT INTO product_orders (order_date, user_id) VALUES ('2024-08-01', 1), ('2024-08-02', 2);

INSERT INTO items (order_id, item_name, price) VALUES
(1, 'Item A', 10.00),
(1, 'Item B', 20.00),
(2, 'Item C', 15.00),
(2, 'Item D', 25.00);

CREATE OR REPLACE FUNCTION get_total_price(order_id INT) RETURNS DECIMAL AS $$
DECLARE
    total_price DECIMAL(10, 2);
BEGIN
    SELECT SUM(price) INTO total_price
    FROM items
    WHERE order_id = order_id;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_user_order_total(user_id INT, order_id INT) RETURNS DECIMAL AS $$
DECLARE
    total_price DECIMAL(10, 2);
BEGIN
    SELECT SUM(i.price) INTO total_price
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.user_id = user_id AND po.order_id = order_id;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

SELECT get_total_price(1);

SELECT get_user_order_total(1, 1);
