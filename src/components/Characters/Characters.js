import React from 'react';
import './Characters.css';
import CharactersCard from '../CharactersCard/CharactersCard';

const Characters = ( { characters }) => {
  // console.log(characters,"CHA")
  const charactersCard = characters.map(character => {
    // console.log(character,"CHARACTER")

    console.log(character.hogwartsStudent, "ID")
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

      />
    );
  });
  return (
    <section>
      {charactersCard}
    </section>
    
  )
}

export default Characters;