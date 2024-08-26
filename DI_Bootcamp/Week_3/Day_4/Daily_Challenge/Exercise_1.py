import requests
import sqlite3
import random

def fetch_countries():
    response = requests.get("https://restcountries.com/v3.1/all")
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception("Error fetching data from REST Countries API")

def create_database():
    conn = sqlite3.connect('countries.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS countries (
            id INTEGER PRIMARY KEY,
            name TEXT,
            capital TEXT,
            flag TEXT,
            subregion TEXT,
            population INTEGER
        )
    ''')
    conn.commit()
    return conn

def insert_countries(conn, countries):
    cursor = conn.cursor()
    for country in countries:
        cursor.execute('''
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (?, ?, ?, ?, ?)
        ''', (country['name']['common'], country.get('capital', [None])[0], country['flags'][0], country['subregion'], country['population']))
    conn.commit()

def main():
    countries = fetch_countries()
    random_countries = random.sample(countries, 10)
    conn = create_database()
    insert_countries(conn, random_countries)
    conn.close()
    print("10 random countries have been inserted into the database.")

if __name__ == "__main__":
    main()
