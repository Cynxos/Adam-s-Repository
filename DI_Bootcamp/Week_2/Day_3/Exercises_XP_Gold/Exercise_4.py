import re

def validate_name(full_name):
    pattern = r'^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$'
    
    if re.match(pattern, full_name):
        return True
    else:
        return False

user_name = input("Please enter your full name (e.g., John Doe): ")
if validate_name(user_name):
    print("The name is valid.")
else:
    print("The name is invalid. Please ensure it contains only letters, one space, and each name starts with an uppercase letter.")
