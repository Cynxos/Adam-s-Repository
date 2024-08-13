class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise Exception("Deposit amount must be positive")
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")
        self.balance -= amount

class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0):
        super().__init__(balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw beyond the minimum balance")
        self.balance -= amount

class BankAccount:
    def __init__(self, balance=0, username="", password=""):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Authentication failed")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Deposit amount must be positive")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive")
        self.balance -= amount

class ATM:
    def __init__(self, account_list, try_limit=2):
        if not all(isinstance(account, BankAccount) for account in account_list):
            raise Exception("All accounts must be instances of BankAccount or MinimumBalanceAccount")
        if try_limit <= 0:
            raise Exception("Try limit must be a positive number")
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ")
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting...")
                break
            else:
                print("Invalid option. Please try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            try:
                account.authenticate(username, password)
                self.show_account_menu(account)
                return
            except Exception as e:
                print(e)
        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print("Maximum tries reached. Shutting down...")
            exit()
        else:
            print("Invalid credentials. Please try again.")

    def show_account_menu(self, account):
        while True:
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option: ")
            if choice == "1":
                amount = int(input("Enter amount to deposit: "))
                account.deposit(amount)
                print(f"Deposited {amount}. New balance: {account.balance}")
            elif choice == "2":
                amount = int(input("Enter amount to withdraw: "))
                account.withdraw(amount)
                print(f"Withdrew {amount}. New balance: {account.balance}")
            elif choice == "3":
                print("Logging out...")
                break
            else:
                print("Invalid option. Please try again.")

if __name__ == "__main__":
    account1 = MinimumBalanceAccount(balance=100, minimum_balance=20, username="user1", password="pass1")
    account2 = BankAccount(balance=200, username="user2", password="pass2")
    atm = ATM([account1, account2])
