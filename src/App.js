import React, { Component } from 'react'
import Characters from '../Characters'

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
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