from datetime import datetime

def minutes_lived(birthdate_str):
    birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.now()
    delta = now - birthdate
    minutes = delta.total_seconds() / 60
    print(f"You have lived for approximately {int(minutes)} minutes.")

birthdate_str = "1991-10-23"
minutes_lived(birthdate_str)
