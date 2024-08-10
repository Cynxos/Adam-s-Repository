list1 = [1, 2, 3]
list2 = [4, 5, 6]

result_list = list1.copy()

for item in list2:
    result_list.append(item)

print(result_list)
