words = []

for i in range(7):
    word = input(f"Enter word {i+1}: ")
    words.append(word)

letter = input("Enter a single character: ")

if len(letter) != 1:
    print("Please enter only one character.")
else:
    for word in words:
        if letter in word:
            index = word.index(letter)
            print(f"The letter '{letter}' first appears in '{word}' at index {index}.")
        else:
            print(f"The letter '{letter}' does not appear in the word '{word}'.")
