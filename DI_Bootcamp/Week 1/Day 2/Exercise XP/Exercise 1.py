my_fav_numbers = {6, 13, 91}

my_fav_numbers.update([15, 66])

my_fav_numbers.pop()

friend_fav_numbers = {3, 8, 15, 21}

our_fav_numbers = my_fav_numbers | friend_fav_numbers

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)
