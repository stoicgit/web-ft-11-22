class Movies:
    def __init__(self, title, director, length, rating):
        self.title = title
        self.director = director
        self.length = length
        self.ratting = rating
    
    def printtitle(self):
        print(self.title)
        
StarWars_revengeOfTheSith = Movies("star Wars: Rots", "George Lucas", "90 min", "4.5/5")

StarWars_revengeOfTheSith.printtitle()