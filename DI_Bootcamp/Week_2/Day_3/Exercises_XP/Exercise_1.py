class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return self.__str__()

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        elif isinstance(other, (int, float)):
            return self.amount + other
        else:
            raise TypeError(f"Unsupported type for addition: {type(other)}")

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, (int, float)):
            self.amount += other
        else:
            raise TypeError(f"Unsupported type for addition: {type(other)}")
        return self
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))        # Output: '5 dollars'
print(int(c1))        # Output: 5
print(repr(c1))       # Output: '5 dollars'

print(c1 + 5)         # Output: 10
print(c1 + c2)        # Output: 15

c1 += 5
print(c1)             # Output: 10 dollars

c1 += c2
print(c1)             # Output: 20 dollars

print(c1 + c3)        # Raises TypeError: Cannot add between Currency type <dollar> and <shekel>
