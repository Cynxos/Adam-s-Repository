import random
import string

def generate_password(length):
    if length < 6 or length > 30:
        raise ValueError("Password length must be between 6 and 30 characters.")
    
    digits = string.digits
    lower_case = string.ascii_lowercase
    upper_case = string.ascii_uppercase
    special_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/"
    
    password = [
        random.choice(digits),
        random.choice(lower_case),
        random.choice(upper_case),
        random.choice(special_chars)
    ]
    
    all_chars = digits + lower_case + upper_case + special_chars
    password += random.choices(all_chars, k=length - 4)
    
    random.shuffle(password)
    
    return ''.join(password)

def validate_password(password):
    has_digit = any(char.isdigit() for char in password)
    has_lower = any(char.islower() for char in password)
    has_upper = any(char.isupper() for char in password)
    has_special = any(char in "!@#$%^&*()_+-=[]{}|;:,.<>?/" for char in password)
    
    return all([has_digit, has_lower, has_upper, has_special])

def main():
    while True:
        try:
            length = int(input("Enter the desired password length (6-30): "))
            if 6 <= length <= 30:
                break
            else:
                print("Please enter a number between 6 and 30.")
        except ValueError:
            print("Invalid input. Please enter a number between 6 and 30.")
    
    password = generate_password(length)
    print(f"Your generated password is: {password}")
    print("Remember to keep your password in a safe place!")

def test_password_generation():
    for length in range(6, 31):
        for _ in range(100):
            password = generate_password(length)
            assert validate_password(password), f"Password validation failed: {password}"
            assert len(password) == length, f"Password length mismatch: {password}"

if __name__ == "__main__":
    main()
    test_password_generation()
    print("All tests passed.")
