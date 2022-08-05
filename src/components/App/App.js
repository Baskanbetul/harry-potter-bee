import React, { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Characters from '../Characters/Characters';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import DetailsCard from '../DetailsCard/DetailsCard';
import Favorites from '../Favorites/Favorites';

const App = () => {
 const [ characters, setCharacters ] = useState([])
 const [ singleCharacter,  setSingleCharacter ] = useState({})
 const [ favoriteCharacters, setFavoriteCharacters ] = useState([])
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
  //  characters.find(character => event.target.id === character.id )
  return characters.find(character => {
    // console.log(character.id)
    if (parseInt(event.target.id) === character.id) {
      setSingleCharacter(character)
    }
    // ?event.target.id === character.id :
    // setSingleCharacter(character)
    
  })
}

const addFavoriteCharacter = (character) => {
  setFavoriteCharacters([ ...favoriteCharacters, character ])
}

const removeFavorite = (id) => {
  return filteredFavorites = favorites.filter(favorite => id !== favorite.id)
  setFavoriteCharacters(filteredFavorites)
}

    // console.log("FAVCARA",favoriteCharacters)
  return (
  //  <Switch>
    <>
      <Header />
      <main className='App'>
        <Route exact path='/'>
            <Characters characters={characters} selectCharacter={selectCharacter}/>
        </Route>
        {/* <Route path={`/details${singleCharacter.name}${singleCharacter.id}`}> */}
        <Route path={'/details'}>
          <DetailsCard singleCharacter={singleCharacter} addFavoriteCharacter={addFavoriteCharacter}/>
        </Route>
        <Favorites removeFavorite={removeFavorite}/>

      </main>
    </>
    // </Switch>
    )
}


export default App;