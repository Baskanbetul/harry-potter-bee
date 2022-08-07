import React from 'react';
import { Link } from 'react-router-dom';
import './CharactersCard.css';
import PropTypes from 'prop-types';

const CharactersCard = ({ name, imageUrl, id}) => {
  return (
    <div className='characters-card'>
      {/* <Link to ={`/${nickname}`}> */}
      <Link to ={`/details/${id}`}>
      <img className='character-poster' 
      id={id}
      src={imageUrl} alt={`${name} name`}></img>
      {/* <p id="borderimg">border-image: url(border.png) 30 round;</p> */}
      <p className='name'>{name}</p>
    </Link>
    </div>
  )
}

export default CharactersCard;

CharactersCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.number
}