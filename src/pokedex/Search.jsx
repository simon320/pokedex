import React, { useState } from 'react'
import { Button, ContainerInputStyled, Input } from './PokeApiStyles';
import { BsSearch } from 'react-icons/bs'


const Search = ({ handleSubmit }) => {
    const [pokemon, setPokemon] = useState("");

  return (
    <ContainerInputStyled onSubmit={(e) => {
        handleSubmit(e, pokemon);
        setPokemon("");
      }}>
        <Input 
          value={pokemon}
          placeholder="find pokemon"
          onChange={(e) => setPokemon(e.target.value)}
        />
        <Button  type='submit'><BsSearch /></Button>
      </ContainerInputStyled>
  )
}

export default Search