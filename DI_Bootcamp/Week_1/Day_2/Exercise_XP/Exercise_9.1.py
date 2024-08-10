def get_ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

total_cost = 0

num_people = int(input("Enter the number of people in the family: "))

for _ in range(num_people):
    age = int(input("Enter the age of the person: "))
    total_cost += get_ticket_price(age)

print(f"\nTotal cost for all tickets: ${total_cost:.2f}")
