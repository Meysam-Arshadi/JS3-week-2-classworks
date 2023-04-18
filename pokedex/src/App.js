import React from "react";
import Logo from "./logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMoves";

const App = () => {
  function logWhenClicked() {
    console.log("I clicked the logo!");
  }
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Meysam's Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
      <PokemonMovesSelector />
    </div>
  );
};

export default App;
