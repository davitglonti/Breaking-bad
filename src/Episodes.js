import React from 'react'

const Episodes = ({episodes}) => {
  return (
    <div className='episodes'>
      {episodes.map((item)=> (
    <div className='episodlist' key={item.episode_id}>
      <section className='episodsection'>
   <h1><strong>episode : </strong>{item.episode_id} </h1>
   <h1><strong>season </strong>: {item.season}</h1>
   </section >
      <h2><strong>title :</strong>  {item.title}</h2>
      <h3><strong>air data-</strong> {item.air_date}</h3>
        <h4><strong>Characters: </strong><br/>{item.characters.join(', ')}</h4>
   </div>
 ))}
    </div>
  )
}

export default Episodes