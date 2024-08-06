basket = ["Banana", "Apples", "Oranges", "Blueberries"]

if "Banana" in basket:
    basket.remove("Banana")

if "Blueberries" in basket:
    basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")

apple_count = basket.count("Apples")

basket.clear()

print("Basket after all operations:", basket)
print("Number of apples in the basket:", apple_count)
