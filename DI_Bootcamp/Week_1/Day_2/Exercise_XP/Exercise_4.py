start = 1.5
end = 5
step = 0.5

sequence = []
current_value = start

while current_value <= end:
    sequence.append(current_value)
    current_value += step

print("Generated sequence:", sequence)
