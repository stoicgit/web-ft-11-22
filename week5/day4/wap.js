const searchButton = document.querySelector(".search");

const getWeather = async () => {
    const weatherInput = document.querySelector(".weather").value;
    console.log(weatherInput);
    const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=ff1cadec65d9f10c3aafc2a01b14612c`
);
    const json = await weatherData.json();
    const currentCity = document.getElementById("current-city")
    const currenttemp = document.getElementById("current-temperature")

    currentCity.innerText = json.name
    currenttemp.innerText = json.main.temp 
    console.log(json);
};

searchButton.addEventListener("click", getWeather);