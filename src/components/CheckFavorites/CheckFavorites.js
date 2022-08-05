import React from "react";
import './CheckFavorites.css';

export default CheckFavorites = ({ favoriteCharacters }) => {
    return favoriteCharacters.map(favCharacters => { 
      <div key={favCharacters.id}>
      <img className='character-poster' src={favCharacters.image} alt={`${favCharacters.name} information`}/>
      <p>Name: {favCharacters.character}</p>
      <p>Nickname: {favCharacters.nickname}</p>
      <p>Is {favCharacters.character} a hogwarts student?:{favCharacters.hogwartsStudent ? 'YES' : 'NO'}</p>
      <p>{favCharacters.character}' house:{favCharacters.hogwartsHouse}</p>
      <p>Interpreted By:{favCharacters.interpretedBy}</p>
      <p>{favCharacters.child[0]} {favCharacters.child[1]} {favCharacters.child[2]}</p>
     </div>
    })
    return (
      {favoriteCharacters}
    )
  }

   