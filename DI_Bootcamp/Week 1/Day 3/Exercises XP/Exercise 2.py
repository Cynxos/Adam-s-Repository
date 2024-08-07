family = {}

num_numbers = int(input("Enter the number of family members: "))

for _ in range(num_numbers):
    name = input("Enter the family member's name: ")
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0  # Free ticket
    elif 3 <= age <= 12:
        price = 10  # $10 for ages between 3 and 12
    else:
        price = 15  # $15 for ages over 12

    print(f"{name.capitalize()} has to pay ${price}")

    total_cost += price

print(f"Total cost for the family: ${total_cost}")