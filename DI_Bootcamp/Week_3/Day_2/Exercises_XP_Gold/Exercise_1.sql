-- SELECT rating, COUNT(*) AS film_count
-- FROM film
-- GROUP BY rating;

-- SELECT title
-- FROM film
-- WHERE (rating = 'G' OR rating = 'PG-13')
--   AND length < 120
--   AND rental_rate < 3.00
-- ORDER BY title;
-- 
-- SELECT * FROM customer WHERE customer_id = 1;

-- UPDATE customer
-- SET first_name = 'Adam',
--     last_name = 'Yishay',
--     email = 'cynxos@gmail.com'
-- WHERE customer_id = 1;

-- SELECT address_id FROM customer WHERE customer_id = 1;

-- UPDATE address
-- SET address = 'Narkis 16',
--     city_id = (SELECT city_id FROM city WHERE city = 'Harish'),
--     postal_code = '37000',
--     phone = '058888888'
-- WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 1);

-- select * from address
