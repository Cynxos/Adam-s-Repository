from datetime import datetime, timedelta

def display_date_and_next_holiday():
    today = datetime.now()
    print(f"Today's date: {today.strftime('%Y-%m-%d %H:%M:%S')}")

    next_holiday_name = "Rosh Hashanah"
    next_holiday_start = datetime(2024, 10, 2, 18, 0)

    time_until_holiday = next_holiday_start - today
    days = time_until_holiday.days
    hours, remainder = divmod(time_until_holiday.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"The next holiday is {next_holiday_name} in {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds.")

display_date_and_next_holiday()
