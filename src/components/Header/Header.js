import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='hogwarts'>
        <Link to='/'>
        <h1>Welcome to Hogwarts</h1>
        </Link>
        {/* <h3>Select Your Character</h3> */}
      </header>
      <Link to='/favorites'>
        <button>Favorites</button>
      </Link>
      

      
     </>
  )
}

export default Header;