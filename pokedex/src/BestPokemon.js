import React from "react";

const BestPokemon = ({ abilities }) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
