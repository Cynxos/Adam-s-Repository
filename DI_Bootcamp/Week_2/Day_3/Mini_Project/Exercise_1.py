class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, other):
        if isinstance(other, Character):
            other.life -= self.attack
            print(f"{self.name} attacks {other.name} for {self.attack} damage!")
            print(f"{other.name} has {other.life} life points left.")
        else:
            print("Target must be an instance of Character.")

char1 = Character("Hero")
char2 = Character("Villain")

char1.basic_attack(char2)

class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, other):
        if isinstance(other, Character):
            other.life -= self.attack
            print(f"{self.name} attacks {other.name} for {self.attack} damage!")
            print(f"{other.name} has {other.life} life points left.")
        else:
            print("Target must be an instance of Character.")

class Druid(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"{self.name} the Druid has entered the forest!")

    def meditate(self):
        self.life += 10
        self.attack -= 2
        print(f"{self.name} meditates and gains 10 life points but loses 2 attack points.")

    def animal_help(self):
        self.attack += 5
        print(f"{self.name} calls for animal help and gains 5 attack points.")

    def fight(self, other):
        if isinstance(other, Character):
            damage = 0.75 * self.life + 0.75 * self.attack
            other.life -= damage
            print(f"{self.name} fights {other.name} and deals {damage} damage!")
            print(f"{other.name} has {other.life} life points left.")
        else:
            print("Target must be an instance of Character.")

class Warrior(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"{self.name} the Warrior is ready for battle!")

    def brawl(self, other):
        if isinstance(other, Character):
            damage = 2 * self.attack
            other.life -= damage
            self.life += 0.5 * self.attack
            print(f"{self.name} brawls with {other.name} and deals {damage} damage!")
            print(f"{self.name} gains {0.5 * self.attack} life points.")
            print(f"{other.name} has {other.life} life points left.")
        else:
            print("Target must be an instance of Character.")

    def train(self):
        self.life += 2
        self.attack += 2
        print(f"{self.name} trains and gains 2 life points and 2 attack points.")

    def roar(self, other):
        if isinstance(other, Character):
            other.attack -= 3
            print(f"{self.name} roars at {other.name} and reduces their attack by 3 points!")
        else:
            print("Target must be an instance of Character.")

class Mage(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"{self.name} the Mage has conjured into existence!")

    def curse(self, other):
        if isinstance(other, Character):
            other.attack -= 2
            print(f"{self.name} curses {other.name} and reduces their attack by 2 points!")
        else:
            print("Target must be an instance of Character.")

    def summon(self):
        self.attack += 3
        print(f"{self.name} summons mystical powers and gains 3 attack points.")

    def cast_spell(self, other):
        if isinstance(other, Character):
            damage = self.attack / self.life
            other.life -= damage
            print(f"{self.name} casts a spell on {other.name} and deals {damage} damage!")
            print(f"{other.name} has {other.life} life points left.")
        else:
            print("Target must be an instance of Character.")

druid = Druid("Elwyn")
warrior = Warrior("Thorin")
mage = Mage("Gandalf")

druid.meditate()
druid.animal_help()
druid.fight(warrior)

warrior.brawl(mage)
warrior.train()
warrior.roar(druid)

mage.curse(warrior)
mage.summon()
mage.cast_spell(druid)
