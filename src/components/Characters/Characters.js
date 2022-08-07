import React from 'react';
import './Characters.css';
import CharactersCard from '../CharactersCard/CharactersCard';
import DetailsCard from '../DetailsCard/DetailsCard';
import PropTypes from 'prop-types';

const Characters = ( { characters }) => {
  const charactersCard = characters.map(character => {
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
    <section className='characters'>
      {charactersCard}
    </section>
  )
}

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array
}