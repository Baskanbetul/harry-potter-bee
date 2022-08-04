import React, { useState } from 'react'
import './App.css';
import Characters from '../Characters/Characters';

const App = () => {
 const [ characters, setCharacters] = useState([])
  }

  componentDidMount = () => {
    return fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters')
    .then(res =>res.json())
    .then(data => {
      this.setState({ characters : data})
    })
  }

  render() {
    return (
      <main className='App'>

      <h1>Welcome the Hogwarts</h1>
      <h2>Select Your Character</h2>
      </main>
    )
  }
}

export default App;