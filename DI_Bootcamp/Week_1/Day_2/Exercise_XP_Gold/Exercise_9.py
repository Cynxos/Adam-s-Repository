import random

games_won = 0
games_lost = 0

while True:
    user_input = input("Enter a number from 1 to 9 (or 'quit' to exit): ")

    if user_input.lower() == 'quit':
        break

    if not user_input.isdigit():
        print("Invalid input. Please enter a number or 'quit'.")
        continue

    user_number = int(user_input)

    if user_number < 1 or user_number > 9:
        print("Number out of range. Please enter a number between 1 and 9.")
        continue

    random_number = random.randint(1, 9)

    if user_number == random_number:
        print(f"Winner! The correct number was {random_number}.")
        games_won += 1
    else:
        print(f"Better luck next time! The correct number was {random_number}.")
        games_lost += 1

print(f"\nTotal games won: {games_won}")
print(f"Total games lost: {games_lost}")
