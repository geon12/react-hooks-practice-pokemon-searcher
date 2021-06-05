import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


function PokemonCollection({pokemonCards}) {

  function populatePokemonCards() {
    return pokemonCards.map((card) => <PokemonCard key={card.id} pokemon={card}/>)
  }
  
  return (
    <Card.Group itemsPerRow={6}>
      {populatePokemonCards()}
      
    </Card.Group>
  );
}

export default PokemonCollection;
