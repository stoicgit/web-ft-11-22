import React from "react";
import "./PokemonCard.css";
import { useState, useEffect } from "react";

const PokemonCard = ({ selectedPokemon }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(selectedPokemon);
      const json = await response.json();
      setPokemon(json);
    };
    fetchPokemon();
  }, []);

  let monName = pokemon?.name;
  const firstLetter = (monName) => {
    let newName = monName?.charAt(0).toUpperCase() + monName?.slice(1);
    return newName;
  };

  let moves = pokemon?.moves?.slice(0, 3);

  return (
    <div className="pokeCard">
      <img src={pokemon?.sprites?.front_default} alt="" className="pokeImage" />
      <h1>{firstLetter(monName)}</h1>

      {moves?.map((move) => {
        return <p>{move?.move?.name}</p>;
      })}
    </div>
  );
};

export default PokemonCard;
