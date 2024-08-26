UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3); 

SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM
    information_schema.table_constraints AS tc
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer' AND tc.constraint_type = 'FOREIGN KEY';

DROP TABLE customer_review;

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT film.title, film.rental_rate
FROM rental
JOIN film ON rental.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.description LIKE '%sumo wrestler%';

SELECT title
FROM film
WHERE length < 60 AND rating = 'R' AND description LIKE '%documentary%';

SELECT film.title
FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
JOIN film ON rental.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
  AND rental.rental_rate > 4.00
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT film.title
FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
JOIN film ON rental.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
  AND (film.title LIKE '%boat%' OR film.description LIKE '%boat%')
  AND film.replacement_cost > 20.00; 
