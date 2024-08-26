SELECT store.store_id, city.city, country.country
FROM store
JOIN address ON store.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id;

SELECT store.store_id, SUM(film.length) AS total_viewing_time_minutes
FROM inventory
JOIN film ON inventory.film_id = film.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NOT NULL
GROUP BY store.store_id;

SELECT DISTINCT customer.customer_id, customer.first_name, customer.last_name, city.city
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN store ON city.city_id = (SELECT address.city_id FROM address WHERE address.address_id = store.address_id);

SELECT DISTINCT customer.customer_id, customer.first_name, customer.last_name, country.country
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
JOIN store ON country.country_id = (SELECT city.country_id FROM city JOIN address ON city.city_id = address.city_id WHERE address.address_id = store.address_id);

SELECT SUM(film.length) AS total_safe_viewing_time_minutes
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name != 'Horror'
  AND film.title NOT LIKE '%beast%'
  AND film.title NOT LIKE '%monster%'
  AND film.title NOT LIKE '%ghost%'
  AND film.title NOT LIKE '%dead%'
  AND film.title NOT LIKE '%zombie%'
  AND film.title NOT LIKE '%undead%'
  AND film.description NOT LIKE '%beast%'
  AND film.description NOT LIKE '%monster%'
  AND film.description NOT LIKE '%ghost%'
  AND film.description NOT LIKE '%dead%'
  AND film.description NOT LIKE '%zombie%'
  AND film.description NOT LIKE '%undead%';

SELECT SUM(film.length) AS total_viewing_time_minutes,
       SUM(film.length) / 60 AS total_viewing_time_hours,
       SUM(film.length) / 1440 AS total_viewing_time_days
FROM film;

SELECT SUM(film.length) AS total_safe_viewing_time_minutes,
       SUM(film.length) / 60 AS total_safe_viewing_time_hours,
       SUM(film.length) / 1440 AS total_safe_viewing_time_days
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name != 'Horror'
  AND film.title NOT LIKE '%beast%'
  AND film.title NOT LIKE '%monster%'
  AND film.title NOT LIKE '%ghost%'
  AND film.title NOT LIKE '%dead%'
  AND film.title NOT LIKE '%zombie%'
  AND film.title NOT LIKE '%undead%'
  AND film.description NOT LIKE '%beast%'
  AND film.description NOT LIKE '%monster%'
  AND film.description NOT LIKE '%ghost%'
  AND film.description NOT LIKE '%dead%'
  AND film.description NOT LIKE '%zombie%'
  AND film.description NOT LIKE '%undead%';
