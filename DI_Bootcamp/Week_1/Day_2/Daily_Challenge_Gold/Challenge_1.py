from datetime import datetime

def birthday_cake():
    birthdate_str = input("Please enter your birthdate (DD/MM/YYYY): ")
    
    try:
        birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
        today = datetime.today()
        age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
        num_candles = age % 10
        candles = "i" * num_candles
        top_layer = f"       ___{candles}___"
        second_layer = "      |:H:a:p:p:y:|"
        third_layer = "    __|___________|__"
        fourth_layer = "   |^^^^^^^^^^^^^^^^^|"
        fifth_layer = "   |:B:i:r:t:h:d:a:y:|"
        sixth_layer = "   |                 |"
        bottom_layer = "   ~~~~~~~~~~~~~~~~~~~"

        print(top_layer)
        print(second_layer)
        print(third_layer)
        print(fourth_layer)
        print(fifth_layer)
        print(sixth_layer)
        print(bottom_layer)

    except ValueError:
        print("Invalid date format. Please use the format DD/MM/YYYY.")

birthday_cake()
