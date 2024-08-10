def decrypt_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    decrypted_message = ""
    for col in range(cols):
        for row in range(rows):
            char = matrix[row][col]
            if char.isalpha():
                decrypted_message += char
            elif decrypted_message and decrypted_message[-1].isalpha():
                decrypted_message += " "
    decrypted_message = decrypted_message.strip()
    return decrypted_message

matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

message = decrypt_matrix(matrix)
print(message)