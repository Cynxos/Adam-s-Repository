def calculate_age_on_planets(age_in_seconds):
    earth_year_in_seconds = 31557600
    
    orbital_periods = {
        "Earth": 1.0,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }
    
    ages = {}
    for planet, period in orbital_periods.items():
        ages[planet] = age_in_seconds / (period * earth_year_in_seconds)
    
    return ages

age_in_seconds = 1000000000
ages = calculate_age_on_planets(age_in_seconds)
for planet, age in ages.items():
    print(f"Age on {planet}: {age:.2f} years")
