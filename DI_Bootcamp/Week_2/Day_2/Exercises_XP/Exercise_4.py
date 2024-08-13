class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"The {self.last_name} family:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}")

if __name__ == "__main__":

    my_family = Family("Smith")

    my_family.members = [
        {"name": "John", "age": 40, "gender": "Male"},
        {"name": "Jane", "age": 38, "gender": "Female"},
        {"name": "Alice", "age": 18, "gender": "Female"},
        {"name": "Bob", "age": 16, "gender": "Male"}
    ]

    my_family.born(name="Charlie", age=0, gender="Male")
    print(my_family.is_18("Alice"))
    print(my_family.is_18("Bob"))
    my_family.family_presentation()
