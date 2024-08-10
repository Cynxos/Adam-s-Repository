def print_colored_text():
    GREEN = "\033[92m"
    PURPLE = "\033[95m"

    messages = [
        f"{GREEN}Hello {PURPLE}world",
        f"{GREEN}I {PURPLE}love python"
    ]

    for _ in range(4):
        print(messages[0])
    for _ in range(4):
        print(messages[1])

print_colored_text()
