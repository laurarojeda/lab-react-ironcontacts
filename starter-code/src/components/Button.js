import React from 'react'

const buttonStyle = {
  margin: '0 5px 0'
}

const Button = (props) => {
  return (
    <div>
      <button style={buttonStyle} onClick={props.addRandom}>Add random</button>
      <button style={buttonStyle} onClick={() => {props.sortName('name')}}>Sort by name</button>
      <button style={buttonStyle} onClick={() => {props.sortPopularity('popularity')}}>Sort by popularity</button>
    </div>
  )
}

export default Button;
