import { Component } from "react";

class Pokemons extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;
    return (
      <section className="card">
        <h4>{name}</h4>
        <p>{type}</p>
        <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt={name}></img>
      </section>
      )
  };
};

export default Pokemons;