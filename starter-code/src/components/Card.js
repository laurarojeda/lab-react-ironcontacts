import React from 'react';

const cardStyle = {
  display: 'inline-block',
  margin: '20px',
}

const imgStyle = { height: '150px' }

const pStyle = { margin: '0 10px 0' }

const Card = (props) => {
  return (
    <div style={cardStyle}>
      <img style={imgStyle} src={props.pictureUrl} alt="contact-card"/>
      <p style={pStyle}>{props.name}</p>
      <p style={pStyle}>{props.popularity}</p>
      <button onClick={() => { props.onDelete(props.id) }}>Delete</button>
    </div>
  )
}

export default Card;
