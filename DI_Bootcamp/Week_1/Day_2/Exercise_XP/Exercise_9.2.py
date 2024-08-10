names = ["Rachel", "David", "Zach", "Rick", "Adam"]

def is_permitted(age):
    return not (16 <= age <= 21)

for name in names[:]:
    age = int(input(f"Enter the age of {name}: "))
    if not is_permitted(age):
        names.remove(name)

print("\nFinal list of people permitted to watch the movie:")
print(names)
