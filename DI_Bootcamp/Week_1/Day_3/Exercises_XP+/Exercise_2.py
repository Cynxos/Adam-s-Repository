sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

product_sales = {}
for transaction in sales_data:
    product = transaction["product"]
    total = transaction["price"] * transaction["quantity"]
    if product in product_sales:
        product_sales[product] += total
    else:
        product_sales[product] = total

print("Total Sales by Product:", product_sales)

customer_spending = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    total = transaction["price"] * transaction["quantity"]
    if customer_id in customer_spending:
        customer_spending[customer_id] += total
    else:
        customer_spending[customer_id] = total

print("Customer Spending Profile:", customer_spending)

for transaction in sales_data:
    transaction["total_price"] = transaction["price"] * transaction["quantity"]

print("Sales Data with Total Price:", sales_data)

high_value_transactions = [transaction for transaction in sales_data if transaction["total_price"] > 500]
high_value_transactions.sort(key=lambda x: x["total_price"], reverse=True)

print("High-Value Transactions:", high_value_transactions)

purchase_counts = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    if customer_id in purchase_counts:
        purchase_counts[customer_id] += 1
    else:
        purchase_counts[customer_id] = 1

loyal_customers = [customer_id for customer_id, count in purchase_counts.items() if count > 1]

print("Loyal Customers (more than one purchase):", loyal_customers)

average_transaction_value = {product: total / len([t for t in sales_data if t["product"] == product])
                             for product, total in product_sales.items()}

print("Average Transaction Value by Product:", average_transaction_value)

product_quantity = {}
for transaction in sales_data:
    product = transaction["product"]
    quantity = transaction["quantity"]
    if product in product_quantity:
        product_quantity[product] += quantity
    else:
        product_quantity[product] = quantity

most_popular_product = max(product_quantity, key=product_quantity.get)

print("Most Popular Product:", most_popular_product)