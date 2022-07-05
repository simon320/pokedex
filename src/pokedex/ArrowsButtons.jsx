import React from 'react'
import { ArrowButtonDown, ArrowButtonRight, ArrowButtonLeft, DivContainerArrow, ArrowButtonUp, BaseButton } from './ArrowButtonsStyles'

const ArrowsButtons = ({ handleSubmit, id, rotatePokemon, setRotatePokemon }) => {

    const handleClick = (e, arrow) => {
        let pokemonId = id + arrow
        handleSubmit(e, String(pokemonId))
    }

    const handleRotate = () => {
        setRotatePokemon(!rotatePokemon)
    }

  return (
    <>
        <ArrowButtonUp onClick={()=> handleRotate() }></ArrowButtonUp>
        <ArrowButtonLeft onClick={(e)=> handleClick(e, -1) }></ArrowButtonLeft>
        <ArrowButtonRight onClick={(e)=> handleClick(e, 1) }></ArrowButtonRight>
        <ArrowButtonDown onClick={()=> handleRotate() }></ArrowButtonDown>
        <BaseButton/>
    </>
  )
}

export default ArrowsButtons