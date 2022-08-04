import React from 'react';
import './CharactersCard.css';

const CharactersCard = ({ name, imageUrl, nickname, hogwartsStudent, hogwartsHouse, interpretedBy, child}) => {
  return (
    <>
    <div className='characters-card'>
      <p>Name:{name}</p>
      <p>Nickname:{nickname}</p>
      <p>Is {name} a hogwarts student?:{hogwartsStudent}</p>
      <p>{name}' house:{hogwartsHouse}</p>
      <p>Interpreted By:{interpretedBy}</p>
      <p>{child[0]} {child[1]} {child[2]}</p>
    </div><div>
        <img className='character-poster' src={imageUrl} alt={`${name} name`}></img>
      </div>
      </>
  )
}

export default CharactersCard;