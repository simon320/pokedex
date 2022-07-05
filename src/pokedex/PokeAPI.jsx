import React, { useState } from 'react';
import { PokePageStyled } from './PokeApiStyles';
import { useAxios } from './useAxios';
import Pokedex from './Pokedex';
import { motion } from 'framer-motion';


const PokeAPI = () => {

  const {  data, isLoading, error, handleSubmit } = useAxios();
  const [rotatePokemon, setRotatePokemon] = useState(false);

  return (
    <PokePageStyled>
      <div
        style={{
          background: "#ff8833",
          height: "95vh",
          boxShadow: "0px 4px 3px inset #000, 0px -4px 3px inset #000",
          padding: "3rem 0",
          borderTop: "3rem solid #333",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          animate={{
            x: [2000, 0, 0],
            rotateY: [0, 34, 0],
          }}
        >
          <Pokedex
            isLoading={isLoading}
            error={error}
            handleSubmit={handleSubmit}
            rotatePokemon={rotatePokemon}
            setRotatePokemon={setRotatePokemon}
            {...data}
          />
        </motion.div>
      </div>
    </PokePageStyled>
  );
}

export default PokeAPI