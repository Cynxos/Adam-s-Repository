toppings = []

while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    else:
        toppings.append(topping)
        print(f"We'll add {topping} to your pizza.")

base_price = 10
topping_price = 2.5
total_price = base_price + (len(toppings) * topping_price)

print("\nYour pizza will have the following toppings:")
for topping in toppings:
    print(f"- {topping}")

print(f"\nTotal price: ${total_price:.2f}")
