import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

// const ticTacToeLogic = (iDontKnowWhatGoesHere) => {
//   const pattern = "❌⭕️";
//   let response = "";
//   for (let i = 0; i < inputValue.length; i++) {
//     response += pattern.charAt(i % pattern.length);
//   }
//   return response;
// };

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
            <Square />
            <Square />
            <Square />
      </div>
      <div className="gameboard"> 
            <Square />
            <Square />
            <Square />
      </div>
      <div className="gameboard"> 
            <Square />
            <Square />
            <Square />
      </div>
          
                
    </>
  )
}

export default App