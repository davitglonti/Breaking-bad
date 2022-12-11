import React from 'react'
const Quotes = ({quotes}) => {
 
  return (
    <>
      <h1 style={{color:' rgb(270, 207, 51)'}}> Amazing Quotes</h1>
      <div className='quotes'>
      
       {quotes.map((item)=> (
        <div  key={item.quote_id} className='quotesfull'>
        <h1>{item.quote_id}</h1>
       <h1>{item.quote} - <strong className='author'>{item.author}</strong>  </h1>
       
       </div>
       
     ))}
     </div>
     
     </>
  )
}

export default Quotes