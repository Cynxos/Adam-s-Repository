SELECT film.title, film.description
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id AND rental.return_date IS NULL
WHERE film.rating IN ('G', 'PG') AND rental.rental_id IS NULL;

CREATE TABLE children_waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES film(film_id),
    customer_id INT REFERENCES customer(customer_id),
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT film.title, COUNT(children_waiting_list.waiting_id) AS number_of_people_waiting
FROM children_waiting_list
JOIN film ON children_waiting_list.film_id = film.film_id
GROUP BY film.title;

INSERT INTO children_waiting_list (film_id, customer_id) VALUES (1, 1), (1, 2), (2, 3);

SELECT film.title, COUNT(children_waiting_list.waiting_id) AS number_of_people_waiting
FROM children_waiting_list
JOIN film ON children_waiting_list.film_id = film.film_id
GROUP BY film.title;
