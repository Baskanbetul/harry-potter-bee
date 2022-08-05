import React, { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Characters from '../Characters/Characters';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';

const App = () => {
 const [ characters, setCharacters ] = useState([])
//  const [ singleCharacter,  setSingleCharacter ] = useState('')
//  const [isError, setIsError] = useState(false)

// const selectCharacter = async () => {
//   const url = 'https://fedeperin-harry-potter-api-en.herokuapp.com/characters'
//   // setIsError(false)
//   try {
//     const response = await fetch(url)
//     const character = await response.json()
//     setCharacters(...characters , data)
//   }
// }


// useEffect(() => {
//   selectCharacter()
// }, [])


  useEffect(() => {
    getCharacters()
    .then(data => { 
      setCharacters(...characters , data)
    })
  }, [])

  const selectCharacter = (event) => {
    // console.log(event.target.id,"EVENT")
    return characters.find(character => event.target.id === character.id )
  }
  

  return (
    <>
    <Header />
    
    <Route path='/'>
      <main className='App'>
        <Characters characters={characters} selectCharacter={selectCharacter}/>
      </main>
    </Route>
    </>
    )
}



export default App;