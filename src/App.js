import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  const handleClick = (index) => {
   let updatedSquares = [...squares]
    if (updatedSquares[index]===null && player) {
      updatedSquares[index] = "x"
    } else if (updatedSquares[index]===null && !player ){
      updatedSquares[index] = "o"
    }
    setSquares(updatedSquares)
    setPlayer(!player)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return (
            <Square
              value={value} 
              key={index}
              index={index}
              handleClick={handleClick} 
            />
          )
        })}
        </div>
    </>
  )
}

export default App