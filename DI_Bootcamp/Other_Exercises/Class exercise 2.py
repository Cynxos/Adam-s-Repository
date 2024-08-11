class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited {amount}. New balance is {self.balance}.")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        else:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance is {self.balance}.")

    def check_balance(self):
        print(f"Current balance is {self.balance}.")

    def __repr__(self):
        return f"BankAccount(owner='{self.owner}', balance={self.balance})"

account = BankAccount("Alice")
account.deposit(100)
account.withdraw(30)
account.check_balance()
print(account)