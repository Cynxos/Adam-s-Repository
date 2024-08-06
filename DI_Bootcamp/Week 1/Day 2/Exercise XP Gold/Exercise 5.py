alphabet = 'abcdefghijklmnopqrstuvwxyz'

vowels = 'aeiou'

for letter in alphabet:
    if letter in vowels:
        print(f"The letter '{letter}' is a vowel.")
    else:
        print(f"The letter '{letter}' is a consonant.")
