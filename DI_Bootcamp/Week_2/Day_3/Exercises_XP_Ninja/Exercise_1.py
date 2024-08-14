from abc import ABC, abstractmethod

class Temperature(ABC):
    def __init__(self, value):
        self.value = value

    @abstractmethod
    def to_celsius(self):
        pass

    @abstractmethod
    def to_kelvin(self):
        pass

    @abstractmethod
    def to_fahrenheit(self):
        pass

class Celsius(Temperature):
    def to_celsius(self):
        return self.value

    def to_kelvin(self):
        return self.value + 273.15

    def to_fahrenheit(self):
        return (self.value * 9/5) + 32

class Kelvin(Temperature):
    def to_celsius(self):
        return self.value - 273.15

    def to_kelvin(self):
        return self.value

    def to_fahrenheit(self):
        return (self.value - 273.15) * 9/5 + 32

class Fahrenheit(Temperature):
    def to_celsius(self):
        return (self.value - 32) * 5/9

    def to_kelvin(self):
        return (self.value - 32) * 5/9 + 273.15

    def to_fahrenheit(self):
        return self.value

c = Celsius(25)
print(f"25°C in Kelvin: {c.to_kelvin()}K")
print(f"25°C in Fahrenheit: {c.to_fahrenheit()}°F")

k = Kelvin(300)
print(f"300K in Celsius: {k.to_celsius()}°C")
print(f"300K in Fahrenheit: {k.to_fahrenheit()}°F")

f = Fahrenheit(77)
print(f"77°F in Celsius: {f.to_celsius()}°C")
print(f"77°F in Kelvin: {f.to_kelvin()}K")
