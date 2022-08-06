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
  return characters.find(character => {
    if (parseInt(event.target.id) === character.id) {
      setSingleCharacter(character)
    }  
  })
}

const addFavoriteCharacter = (character) => {
  setFavoriteCharacters([ ...favoriteCharacters, character ])
}

const removeFavorite = (id) => {
  return setFavoriteCharacters(favoriteCharacters.filter(favorite => id !== favorite.id))
}

return (
  <>
      <Header />
      <main className='App'>
   <Switch>
        <Route exact path='/'>
            <Characters characters={characters} selectCharacter={selectCharacter}/>
        </Route>
        {/* <Route path={`/details${singleCharacter.name}${singleCharacter.id}`}> */}
        <Route exact path={'/details'} render={() => {
           return !singleCharacter ? 'loading' : <DetailsCard singleCharacter={singleCharacter} addFavoriteCharacter={addFavoriteCharacter}/>
        }}/>
          {/* <DetailsCard singleCharacter={singleCharacter} addFavoriteCharacter={addFavoriteCharacter}/> */}
        {/* </Route> */}
        <Route exact path='/favorites'>
        { !favoriteCharacters.length ? <h2>🧙🏻‍♀️ Hey, don't you have favorite character, Ca'mon it is hogwarts' world pick one them! 🧙🏼 
          
        </h2>: 
        //if it is false not zerooooooo, zero it false value 
        <Favorites favoriteCharacters={favoriteCharacters} removeFavorite={removeFavorite}/>
        }
        </Route>
     </Switch>
      </main>
    </>
    )
}


export default App;