class BankAccount:
    total_accounts = 0
    all_accounts = []
    interest_rate = 0.02

    def __init__(self, account_number, account_type):
        self.account_number = account_number
        self._balance = 0
        self._account_type = account_type
        self.transaction_history = []
        BankAccount.total_accounts += 1
        BankAccount.all_accounts.append(self)

    @property
    def balance(self):
        return self._balance

    @property
    def account_type(self):
        return self._account_type

    @account_type.setter
    def account_type(self, value):
        if value not in ['savings', 'checking']:
            raise ValueError("Account type must be 'savings' or 'checking'")
        self._account_type = value

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self._balance += amount
        self.transaction_history.append(f"Deposited {amount}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if self._balance < amount:
            raise ValueError("Insufficient funds")
        self._balance -= amount
        self.transaction_history.append(f"Withdrew {amount}")

    def apply_interest(self):
        if self._account_type == 'savings':
            interest = self._balance * BankAccount.interest_rate
            self._balance += interest
            self.transaction_history.append(f"Interest applied: {interest}")

    @classmethod
    def get_total_accounts(cls):
        return cls.total_accounts

    @classmethod
    def find_account_by_number(cls, account_number):
        for account in cls.all_accounts:
            if account.account_number == account_number:
                return account
        return None

    @classmethod
    def total_balances(cls):
        return sum(account.balance for account in cls.all_accounts)

account1 = BankAccount(1, 'savings')
account2 = BankAccount(2, 'checking')

account1.deposit(1000)
account1.apply_interest()
account2.deposit(500)
account2.withdraw(200)

print(f"Account 1 Balance: {account1.balance}")
print(f"Account 2 Balance: {account2.balance}")

print(f"Total Accounts: {BankAccount.get_total_accounts()}")
print(f"Total Balances: {BankAccount.total_balances()}")

found_account = BankAccount.find_account_by_number(1)
print(f"Found Account Balance: {found_account.balance}")

print(f"Account 1 Transactions: {account1.transaction_history}")
print(f"Account 2 Transactions: {account2.transaction_history}")
