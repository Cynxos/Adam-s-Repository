sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

class_key_vals = sample_dict["class"]
student_key_vals = class_key_vals["student"]
marks_key_vals = student_key_vals["marks"]
history_key_vals = marks_key_vals["history"]

print(marks_key_vals["history"])