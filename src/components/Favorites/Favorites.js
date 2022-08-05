import React from "react";
import './Favorites.css';

const Favorites = ({ favoriteCharacters, removeFavorite }) => {
  // console.log(favoriteCharacters)
  return (
   <div className="favorites">
       <img className='character-poster' src={favoriteCharacters.image} alt={`${favoriteCharacters.name} information`}/>
      <p>Name: {favoriteCharacters.character}</p>
      <p>Nickname: {favoriteCharacters.nickname}</p>
      <p>Is {favoriteCharacters.character} a hogwarts student?:{favoriteCharacters.hogwartsStudent ? 'YES' : 'NO'}</p>
      <p>{favoriteCharacters.character}' house:{favoriteCharacters.hogwartsHouse}</p>
      <p>Interpreted By:{favoriteCharacters.interpretedBy}</p>
      <p>{favoriteCharacters.child[0]} {favoriteCharacters.child[1]} {favoriteCharacters.child[2]}</p> */}
    
    
    <Link to ='/'>
    <button>GO BACK</button>
    </Link>
    <div className='favorite-container'>
      <button className="trash-btn" onClick={() => removeFavorite(id)}>🗑</button>
    </div> 
    </div>
  )
}

export default Favorites;