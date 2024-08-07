manufacturers_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
manufacturers_list = manufacturers_str.split(", ")
print(manufacturers_list)

num_manufacturers = len(manufacturers_list)
print(f"There are {num_manufacturers} manufacturers in the list.")

manufacturers_list.sort(reverse=True)
print("Manufacturers in reverse order:", manufacturers_list)

count_o = sum(1 for manufacturer in manufacturers_list if 'o' in manufacturer.lower())
print(f"{count_o} manufacturers have the letter 'o' in their name.")

count_no_i = sum(1 for manufacturer in manufacturers_list if 'i' not in manufacturer.lower())
print(f"{count_no_i} manufacturers do not have the letter 'i' in their name.")

manufacturers_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_manufacturers = list(set(manufacturers_with_duplicates))
unique_manufacturers_str = ", ".join(unique_manufacturers)
print(f"Companies without duplicates: {unique_manufacturers_str}")
print(f"There are {len(unique_manufacturers)} unique companies in the list.")

unique_manufacturers.sort()
reversed_names = [manufacturer[::-1] for manufacturer in unique_manufacturers]
print("Manufacturers in ascending order with reversed names:", reversed_names)
