class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start(self):
        print(f"{self.make} {self.model} is starting.")

    def stop(self):
        print(f"{self.make} {self.model} is stopping.")

class Car(Vehicle):
    def __init__(self, make, model, number_of_doors):
        super().__init__(make, model)
        self.number_of_doors = number_of_doors

    def open_trunk(self):
        print(f"{self.make} {self.model}'s trunk is being opened.")

class Motorcycle(Vehicle):
    def __init__(self, make, model, has_sidecar):
        super().__init__(make, model)
        self.has_sidecar = has_sidecar

    def pop_wheelie(self):
        print(f"{self.make} {self.model} is popping a wheelie.")

car = Car("Toyota", "Corolla", 4)
car.start()
car.open_trunk()
car.stop()

motorcycle = Motorcycle("Harley-Davidson", "Street 750", False)
motorcycle.start()
motorcycle.pop_wheelie()
motorcycle.stop()
