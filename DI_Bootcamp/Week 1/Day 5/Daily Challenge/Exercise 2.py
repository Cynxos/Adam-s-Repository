def find_longest_word(sentence):
    words = sentence.split()
    longest_word = max(words, key=len)
    return longest_word

sentence = "MacArthur, one of the worlds best fighters, won many fights."
print(find_longest_word(sentence))