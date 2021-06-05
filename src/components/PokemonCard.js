import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [sprite,setSprite] = useState(true)
  function handleToggle() {
    setSprite(prevState => !prevState)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={handleToggle}>
          <img src={sprite ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
