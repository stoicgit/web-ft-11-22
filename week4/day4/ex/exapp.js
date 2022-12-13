console.log(window);
console.log(document);
//GRAB WHAT YOU WANT
const maincontainer = document.querySelector(".maincontainer")

//making variable
const listOfImgs = [ "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Nakagin.jpg/800px-Nakagin.jpg",
"https://architecturesstyle.com/wp-content/uploads/2020/03/famous-buildings-in-london3-e1584445073638.jpg",
"https://www.offbeatfrance.com/images/arc-de-triomphe.jpg" ]

//CREATE WHAT YOU WANT
for( const singleImg of listOfImgs){
    const newImg = document.createElement("img")
    const header = document.createElement("h2")
    const description = document.createElement("p")
    const button = document.createElement("button")
    const buildingContainer = document.createElement("div")

    newImg.src = singleImg
    newImg.classList = 'buildingPics'
    buildingContainer.classList = 'buildingCard'
    header.innerText = 'COOL BUILDING'
    description.innerText = "Mauro found these buildings HOW COOL"
    button.innerText = 'Click ME'
    const buttonClick = (e) =>{
        console.log(e.target.innerText)
    }
    button.addEventListener("click",(e)=> buttonClick(e))
    
    
    buildingContainer.append(newImg,header,description,button)
    maincontainer.append(buildingContainer)
}

//Edit what you grab or created





// Put on back on HTML
maincontainer.append()