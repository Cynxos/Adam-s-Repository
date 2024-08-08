matrix = [
    "7ii",
    "Tsx",
    "h%?",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

hidden_message = ""

for col in range(len(matrix[0])):
    for row in matrix:
        if row[col].isalnum():
            hidden_message += row[col]

print("Hidden message:", hidden_message)