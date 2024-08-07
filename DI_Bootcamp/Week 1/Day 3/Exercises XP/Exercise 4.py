users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
disney_users_A = {}

for index, user in enumerate(users):
    disney_users_A[user] = index

print(disney_users_A)

disney_users_B = {}

for index, user in enumerate(users):
    disney_users_B[index] = user

print(disney_users_B)

disney_users_C = {}

sorted_users = sorted(users)
for index, user in enumerate(sorted_users):
    disney_users_C[user] = index

print(disney_users_C)

disney_users_A_i = {}

for index, user in enumerate(users):
    if 'i' in user:
        disney_users_A_i[user] = index

print(disney_users_A_i)

disney_users_A_mp = {}

for index, user in enumerate(users):
    if user.lower().startswith(('m', 'p')):
        disney_users_A_mp[user] = index

print(disney_users_A_mp)
