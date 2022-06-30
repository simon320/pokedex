import React from 'react'
import pokedex from '../assets/pokeAPI/pokedex.png'
import Loader from './Loader';
import Search from './Search';
import { motion } from 'framer-motion';
import StatusBar from './StatusBar';
import { ContainerImgPokemon, 
          Error, 
          Img, 
          CardStatusContainerStyled, 
          InfoDiv, 
          InfoOrder, 
          LedBlue, LedGreen, LedRed, LedYellow,
          PokedexStyled 
        } from './PokeApiStyles';


const Pokedex = (props) => {

    const { name, sprites, stats, types, order, isLoading, error, handleSubmit } = props;

  return (
    <PokedexStyled>
      <LedRed className={error && 'led-error'} />
      <LedYellow className={isLoading && 'led-search'} />
      <LedGreen className={name && 'led-success'} />
      <LedBlue />
      <Img src={pokedex} alt="" />

        {isLoading ? <Loader /> 
          : (error ? "" 
            : <ContainerImgPokemon>
                <motion.img 
                  src={sprites?.front_default} 
                  alt="" 
                  className='img-pokemon'
                  initial={{width: 0}}
                  animate={{
                    width: 100,
                    y: [0, 5, 0],
                    scale: [1, 1.3, 1]
                  }}
                />
              </ContainerImgPokemon> )}

      <Search handleSubmit={handleSubmit}/>

      {error ? <Error>
                  <motion.p 
                    style={{fontFamily: 'Orbitron',}}
                    animate={{
                      opacity: [1, 0, 1, 0, 1]
                    }}
                    transition={{
                      ease: 'easeOut',
                      duration: 2,
                      type: 'spring'
                    }}
                  >{error}
                  </motion.p>
                </Error>
        : 
        (!isLoading &&
          <InfoDiv>
            <h3 style={{
              fontFamily: 'Orbitron', 
              fontSize: '1rem', 
              position: 'relative',
              marginBottom: '.2rem'
            }}>{name?.toUpperCase()}<span className='write-machine'>&#160;</span></h3>

            {types && <p style={{
              fontFamily: 'Orbitron', 
              position: 'relative',
              alignSelf: 'flex-start', 
              fontSize: '12px',
              letterSpacing: '2px',
              marginLeft: '5px'
            }}>type: {types[0].type.name}<span className='write-machine'>&#160;</span></p>}


            <CardStatusContainerStyled>
              {stats?.slice(0, 3).map((stat) => (
                <StatusBar
                  key={stat.stat.name}
                  {...stat}
                />
              ))}
            </CardStatusContainerStyled> 
          </InfoDiv>
        )
      }

      <InfoOrder>N° {order}</InfoOrder>

    </PokedexStyled>
  );
}

export default Pokedex