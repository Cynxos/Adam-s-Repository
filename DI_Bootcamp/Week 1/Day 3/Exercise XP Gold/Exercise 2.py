birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/08/23",
    "Charlie": "1992/12/03",
    "Dana": "1988/11/14",
    "Eli": "1995/07/19"
}

print("Welcome! You can look up the birthdays of the people in the list!")

print("Here are the names you can choose from:")
for name in birthdays.keys():
    print(name)

name = input("\nPlease enter a person's name to look up their birthday: ")

birthday = birthdays.get(name)

if birthday:
    print(f"\n{name}'s birthday is on {birthday}.")
else:
    print(f"\nSorry, we don’t have the birthday information for {name}.")
