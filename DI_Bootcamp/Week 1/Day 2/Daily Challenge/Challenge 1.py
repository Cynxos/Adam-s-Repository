def generate_multiples():
    try:
        number = int(input("Please enter a number: "))
        length = int(input("Please enter the length of the list: "))
        
        multiples_list = [number * i for i in range(1, length + 1)]
        
        print(f"The first {length} multiples of {number} are: {multiples_list}")
    except ValueError:
        print("Invalid input. Please enter valid numbers.")

generate_multiples()
