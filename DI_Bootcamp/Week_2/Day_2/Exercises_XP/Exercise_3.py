from Exercise_2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, breed):
        super().__init__(name, age, breed)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))

if __name__ == "__main__":
    dog1 = PetDog("Buddy", 3, "Golden Retriever")
    dog2 = PetDog("Max", 2, "Bulldog")
    dog3 = PetDog("Bella", 4, "Poodle")

    dog1.train()
    dog1.play(dog2, dog3)
    dog1.do_a_trick()
