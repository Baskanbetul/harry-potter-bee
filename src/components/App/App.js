import React, { useEffect, useState } from 'react'
import './App.css';
// import Characters from '../Characters/Characters';
import { getCharacters } from '../../apiCalls'
import Characters from '../Characters/Characters';

const App = () => {
 const [ characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
    .then(data => { 
      setCharacters(...characters , data)
      // console.log(data, "DATA")
    })
  }, [])
  // {console.log(characters, "cha")}
  
  return (
    <main className='App'>

      <h1>Welcome the Hogwarts</h1>
      <h2>Select Your Character</h2>
      <Characters characters={characters} />
      </main>
    )
}



export default App;