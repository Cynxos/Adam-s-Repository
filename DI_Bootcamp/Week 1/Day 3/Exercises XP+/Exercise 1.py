student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
for student, grades in student_grades.items():
    average = sum(grades) / len(grades)
    student_averages[student] = average

def assign_letter_grade(average):
    if average >= 90:
        return 'A'
    elif 80 <= average < 90:
        return 'B'
    elif 70 <= average < 80:
        return 'C'
    elif 60 <= average < 70:
        return 'D'
    else:
        return 'F'

student_letter_grades = {}
for student, average in student_averages.items():
    student_letter_grades[student] = assign_letter_grade(average)

class_average = sum(student_averages.values()) / len(student_averages)

for student, average in student_averages.items():
    letter_grade = student_letter_grades[student]
    print(f"{student}: Average Grade = {average:.2f}, Letter Grade = {letter_grade}")

print(f"\nClass Average: {class_average:.2f}")