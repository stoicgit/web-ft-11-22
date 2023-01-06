const searchMovies = async () => {
const movieCardContainer = document.querySelector(".movieCardContainer");
movieCardContainer.innerHTML = "";
const inputField = document
.querySelector(".searchField")
.value.replace(/\s/g, "+");
console.log(inputField);
const movieURL = `http://www.omdbapi.com/?i=tt3896198&apikey=dbe33980${inputField}`;

const rawData = await fetch(movieURL);
const json = await rawData.json();

json.Search.forEach(async (movie) => {
const movieCard = document.createElement("div");
const moviePoster = document.createElement("img");
const movieTitle = document.createElement("h2");
const movieDescription = document.createElement("p");
const movieYear = document.createElement("p");
const imdbID = movie.imdbID;
const individualMovieData = `http://www.omdbapi.com/?i=tt3896198&apikey=dbe33980${imdbID}`;
const fetchIndividualMovie = await fetch(individualMovieData);
const individualJson = await fetchIndividualMovie.json();
console.log(individualJson.Title);


movieCard.classList = "movieCard";
moviePoster.classList = "moviePoster";
moviePoster.src = individualJson.Poster;
movieTitle.innerText = individualJson.Title;
movieDescription.innerText = individualJson.Plot;
movieYear.innerText = individualJson.Year;

movieCard.append(moviePoster, movieTitle, movieDescription, movieYear);
movieCardContainer.append(movieCard);
});

};

const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", searchMovies);
