const topContainer = document.querySelector(".topContainer")

const listOfPokemon = [
    {pokename:"Gengar", hp:220, move1:"ShadowBall",move2: "Curse", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
    {pokename: "MilTank", hp:300, move1: "Rollout", move2:"BodySlam", picture:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"},
    {pokename:"Garchomp", hp:200, move1:"HyperBeam",move2: "Eathquake", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"},
    {pokename:"Swampert", hp:190, move1:"hydropump",move2: "mudshot", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"},
    {pokename:"Phanpy", hp:120, move1:"playrough",move2: "tackle", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"},
];
for (const pokemon of listOfPokemon) {
    const pokecard = document.createElement("div");
    const pokename = document.createElement("h1");
    const hp = document.createElement("h2");
    const move1 = document.createElement("h3");
    const move2 = document.createElement("h3");
    const pokepic = document.createElement("img");


    
    pokepic.src = pokemon["picture"];
    pokename.innerText = pokemon.pokename;
    hp.innerText = pokemon.hp;
    move1.innerText = pokemon.move1;
    move2.innerText = pokemon.move2;
   // pokecard.append(picture, pokename, hp, move1, move2)


    
    topContainer.append(pokecard, pokepic, pokename, hp, move1, move2);
}
