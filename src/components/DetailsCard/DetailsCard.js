import React from "react";
import './DetailsCard.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DetailsCard = ({ characters, addFavoriteCharacter, id }) => {
  const singleCharacter = characters.find(character => parseInt(id) === character.id)
  return (
    <>
    <div className='details-card'>
      <img className='character-poster' src={singleCharacter.image} alt={`${singleCharacter.name} information`}/>
      <p>Name: {singleCharacter.character}</p>
      <p>Nickname: {singleCharacter.nickname}</p>
      <p>Is {singleCharacter.character} a hogwarts student?:{singleCharacter.hogwartsStudent ? 'YES' : 'NO'}</p>
      <p>{singleCharacter.character}' house:{singleCharacter.hogwartsHouse}</p>
      <p>Interpreted By:{singleCharacter.interpretedBy}</p>
      <p>{singleCharacter.child[0]} {singleCharacter.child[1]} {singleCharacter.child[2]}</p>
    </div>
    <Link to ='/'>
    <button>🪄 GO BACK 🪄</button>
    </Link>
    <Link to ='/favorites'>
      <button onClick={() => addFavoriteCharacter(singleCharacter)}> 🪄 Add Favorites 🪄 </button>
    </Link>
    </>
  )
}

export default DetailsCard

DetailsCard.propTypes = {
  characters : PropTypes.array,
  addFavoriteCharacter : PropTypes.func,
  id : PropTypes.string
}