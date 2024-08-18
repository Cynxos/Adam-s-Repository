class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"
    
    import random

class Deck:
    def __init__(self):
        self.cards = [Card(suit, value) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                      for value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]]
        self.shuffle()

    def shuffle(self):
        if len(self.cards) != 52:
            self.cards = [Card(suit, value) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                          for value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]]
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return None
        return self.cards.pop()
