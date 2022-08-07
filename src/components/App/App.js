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
              <Characters characters={characters}/>
          </Route>
          {characters.length && <Route exact path={'/details/:id'} render={( {match} ) => {
            return <DetailsCard characters={characters} addFavoriteCharacter={addFavoriteCharacter} id={match.params.id}/>}}/>}
          <Route exact path='/favorites'>
            {!favoriteCharacters.length ? <h2>🧙🏻‍♀️ Hey, don't you have favorite character, Ca'mon it is hogwarts' world pick one them! 🧙🏼 </h2>: 
              <Favorites favoriteCharacters={favoriteCharacters} removeFavorite={removeFavorite}/>}
          </Route>
        </Switch>
      </main>
    </>
 )
}

export default App;