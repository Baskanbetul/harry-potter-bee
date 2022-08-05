import React from 'react'
import './Header.css'

const Header = ({ checkFavorites }) => {
  return (
    <header className='hogwarts'>
     <h1>Welcome the Hogwarts</h1>
     <h3>Select Your Character</h3>
     <button onClick={() => checkFavorites(favoriteCharacters)}>Favorites</button>
    </header>
    
  )
}

export default Header;