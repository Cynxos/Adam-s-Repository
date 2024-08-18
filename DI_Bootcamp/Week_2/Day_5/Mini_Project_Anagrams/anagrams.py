from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker('word_list.txt')
    
    print("Welcome to the Anagram Checker!")
    
    while True:
        user_input = input("Enter a word to find its anagrams or type 'exit' to quit: ").strip()
        
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break
        
        if not user_input.isalpha():
            print("Error: Only alphabetic characters are allowed.")
            continue
        
        if ' ' in user_input:
            print("Error: Only a single word is allowed.")
            continue
        
        if not checker.is_valid_word(user_input):
            print(f"'{user_input}' is not a valid English word.")
            continue
        
        anagrams = checker.get_anagrams(user_input)
        print(f"\nYOUR WORD: '{user_input.upper()}'")
        print("This is a valid English word.")
        print(f"Anagrams for your word: {', '.join(anagrams)}\n")

if __name__ == "__main__":
    main()
