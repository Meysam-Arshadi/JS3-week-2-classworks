import React, { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  function pokemon() {
    return setCaught(caught.concat("Pokedex", "Docemon"));
  }

  let date = new Date().toLocaleDateString();
  return (
    <>
      <p>Caught these Pokemon on {date}</p>
      <button onClick={pokemon}> Catch Pokemon </button>
      <ul>
        {caught.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
};

export default CaughtPokemon;
