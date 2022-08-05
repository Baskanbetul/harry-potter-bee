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
 const [ error, setError ] = useState(false)

useEffect(() => {
  getCharacters()
  .then(data => { 
    setCharacters(...characters , data)
  })
  .catch(error => {
    setError(true)
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
  // console.log(id, "ID")
    return setFavoriteCharacters(favoriteCharacters.filter(favorite => id !== favorite.id))
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
        <Route exact path={'/details'}>
          <DetailsCard singleCharacter={singleCharacter} addFavoriteCharacter={addFavoriteCharacter}/>
        </Route>
        <Route exact path='/favorites'>
          {/* {console.log(favoriteCharacters.length, "LENGTH")} */}
        { !favoriteCharacters.length ? <h2>🧙🏻‍♀️ Hey, don't you have favorite character, Ca'mon it is hogwarts' world pick one them! 🧙🏼</h2>: 
        //if it is false not zerooooooo, zero it false value 
        <Favorites favoriteCharacters={favoriteCharacters} removeFavorite={removeFavorite}/>
        }
        </Route>
        
          {/* if favorites empty  */}
      </main>
    </>
    // </Switch>
    )
}


export default App;