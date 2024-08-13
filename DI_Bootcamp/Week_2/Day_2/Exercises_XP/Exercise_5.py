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

class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)
        self.members = []

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")
                return

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        super().family_presentation()
        for member in self.members:
            print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")

if __name__ == "__main__":

    incredibles_family = TheIncredibles("Incredibles")

    incredibles_family.members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]

    incredibles_family.incredible_presentation()

    incredibles_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

    incredibles_family.incredible_presentation()
