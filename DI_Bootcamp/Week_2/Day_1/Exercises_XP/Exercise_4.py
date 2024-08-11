class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)
        self.grouped_animals = {i+1: grouped_animals[key] if len(grouped_animals[key]) > 1 else grouped_animals[key][0] for i, key in enumerate(sorted(grouped_animals))}
    
    def get_groups(self):
        for group, animals in self.grouped_animals.items():
            print(f"{group}: {animals}")

my_zoo = Zoo("Safari Park")

my_zoo.add_animal("Ape")
my_zoo.add_animal("Baboon")
my_zoo.add_animal("Bear")
my_zoo.add_animal("Cat")
my_zoo.add_animal("Cougar")
my_zoo.add_animal("Eel")
my_zoo.add_animal("Emu")

my_zoo.get_animals()

my_zoo.sell_animal("Bear")
my_zoo.get_animals()

my_zoo.sort_animals()
my_zoo.get_groups()
