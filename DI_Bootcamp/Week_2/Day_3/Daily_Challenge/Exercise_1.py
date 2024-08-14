import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius: {self.radius} and diameter: {self.diameter}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)

print(circle1)
print(circle2)

print(f"Area of circle1: {circle1.area}")

circle3 = circle1 + circle2
print(circle3)

print(circle1 < circle2)  # False
print(circle1 == circle2)  # True

circles = [circle1, circle2, circle3]
circles.sort()
for circle in circles:
    print(circle)
