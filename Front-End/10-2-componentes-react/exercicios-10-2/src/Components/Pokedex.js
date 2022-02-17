import { Component } from "react";
import pokemons from "../data";
import Pokemons from "./Pokemons";

class Pokedex extends Component {
  render() {
    return (
      <>
      <h1>Pokedéx</h1>
      <article className="container">
        {
          pokemons.map((pokemon) => {
            return <Pokemons pokemons={pokemon}/>
          })
        }
      </article>
        </>
      )
  };
};

export default Pokedex;
