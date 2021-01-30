import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default class PokeCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{mockPokemonData.name}</h1>
        <img
          src={mockPokemonData.sprites.front_default}
          alt="regular charizard"
        />
        <img src={mockPokemonData.sprites.front_shiny} alt="shiny charizard" />
        <a href={mockPokemonData.video}>Check the video!</a>
        <br />
        <hr />
        <div className="text-left">
          mockPokemonData object content is:
          <br />
          <code>{JSON.stringify(mockPokemonData, null, 4)}</code>
        </div>
      </div>
    );
  }
}
