from faker import Faker

fake = Faker()

users = []

def add_user(users_list):
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users_list.append(user)

add_user(users)
add_user(users)

for user in users:
    print(user)
