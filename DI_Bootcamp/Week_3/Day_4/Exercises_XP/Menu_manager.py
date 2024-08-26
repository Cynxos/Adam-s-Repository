import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect("dbname=restaurant user=yourusername password=yourpassword")
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = cur.fetchone()
        cur.close()
        conn.close()
        if item:
            return item
        return None

    @classmethod
    def all_items(cls):
        conn = psycopg2.connect("dbname=restaurant user=yourusername password=yourpassword")
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items")
        items = cur.fetchall()
        cur.close()
        conn.close()
        return items
