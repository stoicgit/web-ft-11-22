#I should be able to type a phone number
#I should be able to view all the phone numbers I have created up to that point 
#I should be able to add phone numbers
#I should be able to see the names of the people attached to each phone number
#I should be able to delete a specific phone number
#I should be able to add phone numbers until I specify a stop and then the game will quit
#The phone number needs to be in this format 
#111-111-1111


#listOfPhoneNumber = []
#phonenumber = input("what is your phone number?\n")
#UserEntry = {"name": username, "number":phonenumber}
#listOfPhoneNumber.append(phonenumber)
#for number in listOfPhoneNumber:
#    print(number)

class phonebook:
    def __init__(self):
        self.ListOfPhoneNumbers =[]
    def addEntry(self,usersEntry):
        self.ListOfPhoneNumbers.append(usersEntry)
    def printListOfPhoneNumbers(self):
        for number in self.ListOfPhoneNumbers:
            print(number)

myPhoneBook = phonebook()
userchoice = ""
while(true):
    if(userchoice == "y"):
        break
    username = input("what is your name?\n")
    
