input_sequence = input("Enter a comma-separated sequence of words: ")
sorted_sequence = ",".join(sorted([word.strip() for word in input_sequence.split(",")]))

print(sorted_sequence)
