import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAddPokemon}) {
  const initialFormData = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }
  const [formData,setFormData] = useState(initialFormData)

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    if (name === "frontUrl" ) {
      setFormData({
        ...formData,
        sprites: {...formData.sprites,front: value}
      })
    } else if (name === "backUrl"){
      setFormData({
        ...formData,
        sprites: {...formData.sprites,back: value}
      })
    } else {
      if(name === 'hp') value = parseInt(value,10)
      setFormData({...formData, [name]: value})
      
    }
    
  }

  function onSubmit(event) {
    event.preventDefault()
    handleAddPokemon(formData)
    setFormData(initialFormData)
  }
 
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
