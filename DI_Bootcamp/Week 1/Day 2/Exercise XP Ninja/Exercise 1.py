import math

C = 50
H = 30

input_string = input("Enter a comma-separated string of numbers: ")

number_strings = input_string.split(',')

numbers = [int(num) for num in number_strings]

for D in numbers:
    Q = math.sqrt((2 * C * D) / H)
    print(f"For D = {D}, Q = {Q:.2f}")
#Am not sure why it's giving an output of numbers with breakpoints