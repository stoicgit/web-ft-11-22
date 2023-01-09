//Search for planet
//Create a card for each planet with 3/4 peices of info each
//to acess things in an object {} use dot notation planet.temp planet.info planet.whatever   
//acess things in array by  index [] or multiple by a for of loop or forEach


//*****GENERAL GOAL GET STUFF FROM API ON PAGE***********
//Plan to  have something styled by end of day

//create html container
//select them on js
//create html elements for wach piece of data
//append them to dom
//after working with jupiter make planet dynamic think input field value etc...
//give each element class name/'classList'
//stlye card


const planetContainer = document.querySelector('.planet-container')
const inputValue = document.querySelector('.inputFeild')
const searchBtn = document.querySelector('.search-btn')



const getPlanetStuff = async () =>{
    const headers = {
        'X-Api-Key': 'Tjt8o7zzIxhzZumnJzY5rQ==yzpfwlSGd26XxWJP'
    }
    const url = `https://api.api-ninjas.com/v1/planets?name=${inputValue.value}`
    const res = await fetch(url, {
        method: "GET",
        headers: headers,
    })
    const data = await res.json()
    console.log (data)

    let planetList = document.createElement('ul')
    data.forEach(planet => {
        console.log(planet)
        console.log(planet.name)

        let planetItem = document.createElement('li')
        planetItem.innerText = planet.name
        planetItem.classList = 'planet-item'
        console.log(planetItem)
        console.log(planetList)
        planetList.append(planetItem)
    });
        console.log(planetList)
        planetContainer.append(planetList)
}
searchBtn.addEventListener("click", getPlanetStuff)

