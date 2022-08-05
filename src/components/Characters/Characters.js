import React from 'react';
import './Characters.css';
import CharactersCard from '../CharactersCard/CharactersCard';
import DetailsCard from '../DetailsCard/DetailsCard';

const Characters = ( { characters, selectCharacter }) => {
  // console.log(characters,"CHA")
  const charactersCard = characters.map(character => {
    // console.log(character,"CHARACTER")

    // console.log(character.hogwartsStudent, "ID")
    return (
      <CharactersCard 
      id={character.id}
      key={character.id}
      name={character.character}
      imageUrl={character.image}
      nickname={character.nickname}
      hogwartsStudent={character.hogwartsStudent}
      hogwartsHouse={character.hogwartsHouse}
      interpretedBy={character.interpretedBy}
      child={character.child}
      selectCharacter={selectCharacter}
      />
    );
  });
  return (
    <section className='characters'>
      {charactersCard}
    </section>
    
  )
}

export default Characters;