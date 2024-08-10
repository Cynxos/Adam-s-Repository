birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/08/23",
    "Charlie": "1992/12/03",
    "Dana": "1988/11/14",
    "Eli": "1995/07/19"
}

print("Welcome! You can look up the birthdays of the people in the list!")

name = input("Please enter a person's name to look up their birthday: ")

birthday = birthdays.get(name)

if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don't have a birthday listed for {name}.")
