import re

def return_numbers(input_string):
    pattern = r'\d+'
    numbers = re.findall(pattern, input_string)
    return numbers

input_string = 'k5k3q2g5z6x9bn'
result = return_numbers(input_string)
print(result)  # Output: 532569

