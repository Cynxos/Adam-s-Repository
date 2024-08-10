input_string = input("Enter a sequence of comma-separated numbers: ")

number_strings = input_string.split(',')

numbers_list = [int(num) for num in number_strings]

numbers_tuple = tuple(numbers_list)

print("List:", numbers_list)
print("Tuple:", numbers_tuple)
