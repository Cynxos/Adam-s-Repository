def remove_consecutive_duplicates():
    user_string = input("Please enter a string: ")
    
    result_string = ""

    previous_char = None
    for char in user_string:
        if char != previous_char:
            result_string += char
        previous_char = char

    print(f"String with consecutive duplicates removed: {result_string}")

remove_consecutive_duplicates()
