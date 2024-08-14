from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    next_year = datetime(now.year + 1, 1, 1)
    time_left = next_year - now
    print(f"Time left until January 1st: {time_left}")

time_until_new_year()
