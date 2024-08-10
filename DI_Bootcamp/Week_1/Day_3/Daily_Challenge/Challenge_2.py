items_purchase = {
    "Milk": 5,
    "Snack": 2,
    "Bagel": 30,
    "Chicken": 100,
}

money_in_wallet = 1

affordable_items = []

for item, price in items_purchase.items():
    if money_in_wallet >= price:
        affordable_items.append(item)
if affordable_items:
    print("You can afford the following items:")
    for item in affordable_items:
        print(item)
else:
    print("Nothing")
