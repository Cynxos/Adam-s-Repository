from game import Game

def get_user_menu_choice():
    print("Menu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    choice = input("Enter your choice: ")
    while choice not in ["1", "2", "3"]:
        print("Invalid choice. Please try again.")
        choice = input("Enter your choice: ")
    return choice

def print_results(results):
    print("Game Results:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "2":
            print_results(results)
        elif choice == "3":
            print_results(results)
            break

if __name__ == "__main__":
    main()
