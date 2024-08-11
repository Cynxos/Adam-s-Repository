class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            'to': other_phone.phone_number,
            'from': self.phone_number,
            'content': content
        }
        self.messages.append(message)

    def show_outgoing_messages(self):
        for message in self.messages:
            if message['from'] == self.phone_number:
                print(message)

    def show_incoming_messages(self):
        for message in self.messages:
            if message['to'] == self.phone_number:
                print(message)

    def show_messages_from(self, other_phone):
        for message in self.messages:
            if message['from'] == other_phone.phone_number:
                print(message)

phone1 = Phone("123-456-7890")
phone2 = Phone("098-765-4321")

phone1.call(phone2)

phone1.show_call_history()

phone1.send_message(phone2, "Hello, how are you?")

phone1.show_outgoing_messages()

phone2.show_incoming_messages()

phone2.show_messages_from(phone1)
