items = {
    "banana": {"price": 4, "stock": 10},
    "apple": {"price": 2, "stock": 5},
    "orange": {"price": 1.5, "stock": 24},
    "pear": {"price": 3, "stock": 1}
}

total_cost = 0

for item, details in items.items():
    total_cost += details["price"] * details["stock"]

print(f"The total cost to buy everything in stock is ${total_cost}.")
