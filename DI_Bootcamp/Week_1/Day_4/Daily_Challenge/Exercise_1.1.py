matrix_str = [
    "7ii",
    "Tsx",
    "h%?",
    "i #"
    "sM ",
    "$a ",
    "#t%",
    "^r!",
    ]

#[[7,T,h],[i,s,$]
          
matrix = []

#for i in range(len(matrix_str)):
#    sublist = [matrix_str[i:i+3]]
#    if '\n' in sublist:
#        sublist.pop('\n')
#    matrix.append(sublist)

#split(\n)

rows = matrix_str.split('\n')
rows_clean = rows
print(rows)

for row in rows:
    matrix.append(list(row))

print(matrix)
    