Questions
Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- Assumption: The output of the query will be 0 because no rows in FirstTab will meet the condition ft.id NOT IN (NULL).

Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
    
-- Assumption: The output of the query will be 3 because there are three rows in FirstTab that do not have id = 5.

Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- Assumption: The output of the query will be 0 because no rows in FirstTab will meet the condition ft.id NOT IN (5, NULL).

Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- Assumption: The output of the query will be 3 because there are three rows in FirstTab that do not have id = 5.