import React from 'react';
import { Link } from 'react-router-dom';
import './CharactersCard.css';

const CharactersCard = ({ name, imageUrl, id, nickname, selectCharacter }) => {
  // console.log(hogwartsStudent, "HOGSTU")
  return (
    <div className='characters-card'>
      <Link to ={`/${nickname}${id}`}>
      <img className='character-poster' src={imageUrl} alt={`${name} name`} onClick={(event) => selectCharacter(event)}></img>
      <p>Name:{name}</p>
    </Link>
    </div>
  
  )
}

export default CharactersCard;

{/* <p>Nickname:{nickname}</p> */}
{/* <p>Is {name} a hogwarts student?:{hogwartsStudent.toString()}</p> */}
{/* <p>{name}' house:{hogwartsHouse}</p> */}
{/* <p>Interpreted By:{interpretedBy}</p> */}
{/* <p>{child[0]} {child[1]} {child[2]}</p> */}