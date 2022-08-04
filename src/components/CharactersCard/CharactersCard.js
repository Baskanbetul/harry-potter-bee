import React from 'react';
import './CharactersCard.css';

const CharactersCard = ({ name, imageUrl, nickname, hogwartsStudent, hogwartsHouse, interpretedBy, child}) => {
  console.log(hogwartsStudent, "HOGSTU")
  return (
    <div className='characters-card'>
      <p>Name:{name}</p>
        <img className='character-poster' src={imageUrl} alt={`${name} name`}></img>
      </div>
  
  )
}

export default CharactersCard;

{/* <p>Nickname:{nickname}</p> */}
{/* <p>Is {name} a hogwarts student?:{hogwartsStudent.toString()}</p> */}
{/* <p>{name}' house:{hogwartsHouse}</p> */}
{/* <p>Interpreted By:{interpretedBy}</p> */}
{/* <p>{child[0]} {child[1]} {child[2]}</p> */}