import React from 'react'

const Square = ({ value }) => {
  const whenClick = () => {
    alert("hey")
  }
  return (
    <button className="square" onClick={whenClick
    }>{value}</button>
  )
}
export default Square
