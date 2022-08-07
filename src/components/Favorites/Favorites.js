import React from "react";
import './Favorites.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Favorites = ({ favoriteCharacters, removeFavorite }) => { //, id 
  const formatCharacters = favoriteCharacters.map(favoriteCharacter => {
    return (
      <div key={favoriteCharacter.id}>
      <img className='character-poster' src={favoriteCharacter.image} alt={`${favoriteCharacter.name} information`}/>
      <p>Name: {favoriteCharacter.character}</p>
      <p>Nickname: {favoriteCharacter.nickname}</p>
      <p>Is {favoriteCharacter.character} a hogwarts student?:{favoriteCharacter.hogwartsStudent ? 'YES' : 'NO'}</p>
      <p>{favoriteCharacter.character}' house:{favoriteCharacter.hogwartsHouse}</p>
      <p>Interpreted By:{favoriteCharacter.interpretedBy}</p>
      <p>{favoriteCharacter.child[0]} {favoriteCharacter.child[1]} {favoriteCharacter.child[2]}</p>
      <button className="trash-btn" onClick={() => removeFavorite(favoriteCharacter.id)}>🗑</button>
     </div>
    )
  })
  return (
   <div className="favorites">
    {formatCharacters}
    <Link to ='/'>
    <button>GO BACK</button>
    </Link>
    </div>
  )
}

export default Favorites;

Favorites.propTypes = {
  favoriteCharacters: PropTypes.array,
  removeFavorite: PropTypes.func
}