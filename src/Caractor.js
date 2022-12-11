import React from 'react'
import './App.css';
import CharacterItem from './CharacterItem'
const Caractor = ({items, isLoading}) => {
  return isLoading ? (<h1>Loading ... </h1>) : <section className='cards'>
 {items.map(item=> (
    <div className='characters' key={item.char_id}>
    <CharacterItem key={item.char_id} item={item}></CharacterItem>
   </div>
 ))}
  </section>
}

export default Caractor