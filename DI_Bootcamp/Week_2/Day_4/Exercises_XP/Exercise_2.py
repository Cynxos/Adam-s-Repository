import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")

data["company"]["employee"]["birth_date"] = "1990-01-01"

with open('updated_sample.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Updated JSON saved to 'updated_sample.json'")
