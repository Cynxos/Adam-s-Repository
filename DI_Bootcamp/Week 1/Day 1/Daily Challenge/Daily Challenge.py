def process_string():
    user_string = input("Please enter a string of 10 characters: ")

    if len(user_string) < 10:
        print("String not long enough.")
    elif len(user_string) > 10:
        print("String too long.")
    else:
        print("Perfect string.")
        
        print(f"First character: {user_string[0]}")
        print(f"Last character: {user_string[-1]}")

        print("Constructed string:")
        constructed_string = ""
        for char in user_string:
            constructed_string += char
            print(constructed_string)

process_string()