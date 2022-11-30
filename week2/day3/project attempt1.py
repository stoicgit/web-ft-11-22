print("""
                                                            
Rainbow                     88          88 88              
                            88          88 ""              
                            88          88                 
     ,adPPYb,d8  ,adPPYba,  88,dPPYba,  88 88 8b,dPPYba,   
    a8"    `Y88 a8"     "8a 88P'    "8a 88 88 88P'   `"8a  
    8b       88 8b       d8 88       d8 88 88 88       88  
    "8a,   ,d88 "8a,   ,a8" 88b,   ,a8" 88 88 88       88  
     `"YbbdP"Y8  `"YbbdP"'  8Y"Ybbd8"'  88 88 88       88  
     aa,    ,88                                            
      "Y8bbdP"                                             
      """)
userChoice = ""

userChoice = input("what is your hero's name?")

userChoice = input("veiw map? y/n")

def map():
    print("""
    1. go to gray_forest
    2. go to gray_valley  
    3. go to gray_cliff
          """)

def gray_forest():
    print("""
    1. fight red goblin
    2. fight orange goblin
    3. fight yellow goblin
    4. run away   
           """)
    
def gray_valley():
    print(""""
    1. fight green goblin
    2. fight blue goblin
    3. fight indigo goblin
    4. run away
          """)

def gray_cliff():
    print(""""
    1. fight the violet goblin
    2. run away     
          """)

class Hero:
    name = ""
    def __init__(self, attack, health, defense):
        self.attack = 10
        self.health = 100
        self.defense = 8
    def GoblinSlash(self):
        health = health - (self.attack - self.defense)
    def TakeDamaged(self):
        self.health = self.defense - self.attack
        
class Goblin:
    def __init__(self, attack, health, defense):
        self.attack = attack
        self. health = health
        self.defense = defense
    def RedGoblinPunch(self):
        health = self.attack - self.defense
    def TakeDamage(self):
        self.health = self.defense - self.attack
        
        newGoblin = Goblin(10,100,8)
        
        
class OrangeGoblin:
      def __init__(self, attack, health, defense):
        self.attack = 5
        self. health = 5
        self.defense = 6
class YellowGoblin:
    def __init__(self, attack, health, defense):
        self.attack = 5
        self. health = 5
        self.defense = 6
class GreenGoblin:
    def __init__(self, attack, health, defense):
        self.attack = 5
        self. health = 5
        self.defense = 6
class BlueGoblin:
    def __init__(self, attack, health, defense):
        self.attack = 5
        self. health = 5
        self.defense = 6
class IndigoGoblin:
    def __init__(self, attack, health, defense):
        self.attack = 5
        self. health = 5
        self.defense = 6
class VioletGoblin:
    def __init__(self, attack, health, defense):
        self.attack = 5
        self. health = 5
        self.defense = 6
    
while True:
    if(userChoice == "n"):
        break
    if(userChoice == "y"):
        map()
        break

userChoice = input("where would you like to go?")
while True:
    if(userChoice == "1"):
        gray_forest()
        break
    if(userChoice == "2"):
        gray_valley()
        break
    if(userChoice == "3"):
        gray_cliff()
        break