def display_season():
    try:
        month = int(input("Please enter a month (1 to 12): "))
        
        if month == 12 or 1 <= month <= 2:
            season = "Winter"
        elif 3 <= month <= 5:
            season = "Spring"
        elif 6 <= month <= 8:
            season = "Summer"
        elif 9 <= month <= 11:
            season = "Autumn"
        else:
            season = None
        
        if season:
            print(f"The season for month {month} is {season}.")
    except ValueError:
        print("Invalid input. Please enter a valid number between 1 and 12.")
display_season()
