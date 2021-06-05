import React, { useEffect,useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  
  const URL = `http://localhost:3001/pokemon`
  
  const[search,setSearch] = useState("")

  const [pokemonCards, setPokemonCards] = useState([])

  useEffect(() => {
    
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        setPokemonCards(data)
      })
  },[])

  function filterPokemonCards() {
    return pokemonCards.filter((card) => (card.name.toLowerCase()).includes(search.toLowerCase()))
  }

  function handleAddPokemon(pokemon) {
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    } 
    fetch(URL,configObj)
      .then(resp => resp.json())
      .then(card => setPokemonCards([...pokemonCards,card]))
    
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonCards={filterPokemonCards(pokemonCards)} />
    </Container>
  );
}

export default PokemonPage;
