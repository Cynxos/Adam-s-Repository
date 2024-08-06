favorite_fruits = input("Please enter your favorite fruit(s) separated by a space: ")

favorite_fruits_list = favorite_fruits.split()

chosen_fruit = input("Please enter the name of any fruit: ")

if chosen_fruit in favorite_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")
