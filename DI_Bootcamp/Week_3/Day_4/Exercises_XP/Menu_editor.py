from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("Menu:")
    print("V: View an Item")
    print("A: Add an Item")
    print("D: Delete an Item")
    print("U: Update an Item")
    print("S: Show the Menu")
    print("E: Exit")
    choice = input("Choose an option: ").upper()
    if choice == 'V':
        view_item()
    elif choice == 'A':
        add_item_to_menu()
    elif choice == 'D':
        remove_item_from_menu()
    elif choice == 'U':
        update_item_from_menu()
    elif choice == 'S':
        show_restaurant_menu()
    elif choice == 'E':
        show_restaurant_menu()
        exit()

def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter item name to remove: ")
    item = MenuItem(name, 0)
    item.delete()
    print("Item was deleted successfully.")

def update_item_from_menu():
    name = input("Enter current item name: ")
    price = int(input("Enter current item price: "))
    new_name = input("Enter new item name: ")
    new_price = int(input("Enter new item price: "))
    item = MenuItem(name, price)
    item.update(new_name, new_price)
    print("Item was updated successfully.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    for item in items:
        print(f"ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")

if __name__ == "__main__":
    while True:
        show_user_menu()
