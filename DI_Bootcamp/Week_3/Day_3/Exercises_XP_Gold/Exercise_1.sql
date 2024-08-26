SELECT rental_id, inventory_id, customer_id, rental_date
FROM rental
WHERE return_date IS NULL;

SELECT customer.customer_id, customer.first_name, customer.last_name, COUNT(rental.rental_id) AS outstanding_rentals
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
WHERE rental.return_date IS NULL
GROUP BY customer.customer_id, customer.first_name, customer.last_name;

SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE actor.first_name = 'Joe' AND actor.last_name = 'Swank' AND category.name = 'Action';
