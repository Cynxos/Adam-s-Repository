from googletrans import Translator

translator = Translator()

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

translations = {}

for word in french_words:
     translated = translator.translate(word, src='fr', dest='en')
     translations[word] = translated.text

print(translations)
