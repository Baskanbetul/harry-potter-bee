import React from 'react';
import './CharactersCard.css';

const CharactersCard = ({ character }) => {
  return (
    <div className='characters-card'>
      <h3>{character}</h3>
    </div>
    <img className='character-poster' src={character.image}>
				</img>
  )
}

export default CharactersCard;