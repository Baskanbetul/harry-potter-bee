export const getCharacters = () => {
  return fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters')
    .then(res =>res.json())
  }