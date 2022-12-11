import React, {useState} from 'react'
import './App.css';
const Searching = (props) => {

        const [text, setText]=useState('')

        const change = (q)=> {
            setText(q)
            props.getQuery(q)
        }
  return (
    <div className='search'>
<form>
    <input
     type='text' 
    className='form-control' 
    placeholder='search characters'
    value={text}
    onChange={(e)=> change(e.target.value)}
    />
</form>
    </div>
  )
}

export default Searching;