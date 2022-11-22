# K I S S

# [k] I should be able to type a phone number 
# [k] I should be able to view all the phone numbers I have created up to that point 
# [k] I should be able to add phone numbers
# [k] I should be able to see the names of the people attached to each phone number 
#  i need to break this loop
#  i need to delete a number
#  i need to print the names in a nicer way

class PhoneBook:
    def __init__(self):
        self.phonenumbers = []
    def printList(self):
        counter = 1
        for number in self.phonenumbers:
            print(f"""
            {counter}: {number["name"]} - {number["phoneNumber"]}
            """)
            counter+= 1
    def addnumber(self,phonenumber):
        self.phonenumbers.append(phonenumber)
    def delNumber(self,number):
        self.phonenumbers
joesPhoneBook = PhoneBook()
userChoice = ""
while(True):
    userNumber = input("what is your phonenumber?\n")
    userName = input("what is your name?\n")
    entry = {"phonenumber":userNumber, "name":userName}
    joesPhoneBook.addnumber(entry)
    joesPhoneBook.printList()
    