class Text:
    def __init__(self, text):
        self.text = text

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            text = file.read()
        return cls(text)

    def word_frequency(self, word):
        words = self.text.split()
        frequency = words.count(word)
        if frequency == 0:
            return f"The word '{word}' is not in the text."
        return frequency

    def most_common_word(self):
        words = self.text.split()
        word_counts = {}
        for word in words:
            word_counts[word] = word_counts.get(word, 0) + 1
        most_common = max(word_counts, key=word_counts.get)
        return most_common

    def unique_words(self):
        words = self.text.split()
        unique_words = set(words)
        return list(unique_words)

text_instance = Text.from_file('The_file.txt')
print(text_instance.word_frequency("the"))  
print(text_instance.most_common_word())     
print(text_instance.unique_words())         
