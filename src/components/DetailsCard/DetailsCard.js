import React from "react";
import './DetailsCard.css';


const DetailsCard = ({ singleCharacter }) => {
  return (
    <>
    <div className='details-card'>
      <img className='character-poster' src={singleCharacter.imageUrl} alt={`${singleCharacter.name} information`}/>
      <p>Name:{singleCharacter.name}</p>
      <p>Nickname:{singleCharacter.nickname}</p>
      {/* <p>Is {name} a hogwarts student?:{hogwartsStudent.toString()}</p> */}
      <p>{singleCharacter.name}' house:{singleCharacter.hogwartsHouse}</p>
      <p>Interpreted By:{singleCharacter.interpretedBy}</p>
      {/* <p>{child[0]} {child[1]} {child[2]}</p> */}
    </div>
    <button>GO BACK</button>
    <p>🪄</p>
    </>
  )
}

export default DetailsCard