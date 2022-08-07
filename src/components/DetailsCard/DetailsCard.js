import React from "react";
import './DetailsCard.css';
import { Link } from "react-router-dom";

const DetailsCard = ({ singleCharacter, addFavoriteCharacter}) => {
  // console.log(singleCharacter, "SINGLE")
  return (
    <>
    <div className='details-card'>
      <img className='character-poster' src={singleCharacter.image} alt={`${singleCharacter.name} information`}/>
      <p className='details'>Name: {singleCharacter.character}</p>
      <p className='details'>Nickname: {singleCharacter.nickname}</p>
      <p className='details'>Is {singleCharacter.character} a hogwarts student?:{singleCharacter.hogwartsStudent ? 'YES' : 'NO'}</p>
      <p className='details'>{singleCharacter.character}' house:{singleCharacter.hogwartsHouse}</p>
      <p className='details'>Interpreted By:{singleCharacter.interpretedBy}</p>
      <p className='details'>{singleCharacter.child[0]} {singleCharacter.child[1]} {singleCharacter.child[2]}</p>
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