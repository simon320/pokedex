import React from 'react';
import { PokePageStyled } from './PokeApiStyles';
import { useAxios } from './useAxios';
import Pokedex from './Pokedex';
import { motion } from 'framer-motion';


const PokeAPI = () => {

  const {  data, isLoading, error, handleSubmit } = useAxios();

  return (
    <PokePageStyled>
      
      <div style={{
        background: '#ff8833',
        boxShadow: '0px 10px 30px inset #000, 0px -10px 30px inset #000',
        padding: '3rem 0',
        borderTop: '3rem solid #333'
      }}>
        <motion.div
          animate={{
            x: [2000, 0, 0],
            rotateY: [0, 34, 0]
          }}
        >
          <Pokedex isLoading={isLoading} error={error} handleSubmit={handleSubmit} {...data} />
        </motion.div>
      </div>

    </PokePageStyled>
  )
}

export default PokeAPI