import React from 'react'
import {useState} from 'react'

const Square = ({value, index, handleClick}) => {
  const onSquareClick = () => {
    handleClick(index)
  }
  return (
    <button className="square" onClick={onSquareClick
    }>{value}</button>
  )
}
export default Square
