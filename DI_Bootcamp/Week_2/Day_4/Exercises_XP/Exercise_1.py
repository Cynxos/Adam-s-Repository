import random

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().split()
    return words

def get_random_sentence(length):
    words = get_words_from_file('word_list.txt')
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words).lower()
    return sentence

def main():
    print("This program generates a random sentence of a specified length.")
    
    try:
        length = int(input("Enter the length of the sentence (between 2 and 20): "))
        if length < 2 or length > 20:
            raise ValueError("The length must be between 2 and 20.")
    except ValueError as e:
        print(f"Error: {e}")
        return
    
    sentence = get_random_sentence(length)
    print(f"Generated sentence: {sentence}")

if __name__ == "__main__":
    main()