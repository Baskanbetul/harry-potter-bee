import React, { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from '../../apiCalls';
import Characters from '../Characters/Characters';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import DetailsCard from '../DetailsCard/DetailsCard';

const App = () => {
 const [ characters, setCharacters ] = useState([])
 const [ singleCharacter,  setSingleCharacter ] = useState({})
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
      // console.log(singleCharacter)
      if (event.target.id === character.id) {
        setSingleCharacter(characters)
      }
      // ?event.target.id === character.id :
      //   setSingleCharacter(characters)
      
    })
  }
  

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
          <DetailsCard singleCharacter={singleCharacter}/>
        </Route>
      </main>
    </>
    // </Switch>
    )
}


export default App;