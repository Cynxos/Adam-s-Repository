def check_name():
    my_name = "Adam"
    
    user_name = input("Please enter your name: ")

    if user_name.lower() == my_name.lower():
        print(f"Oh wow, would you look at that! We have the same name, {user_name}!")
    else:
        print(f"Oh, hey {user_name}, nice to meet you! My name is {my_name}.")

check_name()
