import React from 'react';
import { Link } from 'react-router-dom';
import './CharactersCard.css';

const CharactersCard = ({ name, imageUrl, id, nickname, selectCharacter }) => {
  // console.log(hogwartsStudent, "HOGSTU")
  return (
    <div className='characters-card'>
      {/* <Link to ={`/${nickname}`}> */}
      <Link to ={`/details/${id}`}>
      <img className='character-poster' 
      id={id}
      src={imageUrl} alt={`${name} name`} 
      onClick={(event) => selectCharacter(event)} ></img>
      {/* <p id="borderimg">border-image: url(border.png) 30 round;</p> */}
      <p className='name'>{name}</p>
    </Link>
    </div>
  
  )
}

export default CharactersCard;
