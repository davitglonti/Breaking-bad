import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Caractor from './Caractor';
import Header from './Header';
import Searching from './Searching';
import Quotes from './Quotes';
import Episodes from './Episodes';
function App() {
  const [items, setItems]=useState([])
  const [episodes, setEpisodes]=useState([])
  const [quotes, setQuotes]=useState([])
  const [loading, setLoading]=useState(true)
  const [query,setQuery]= useState('')

 


  useEffect(()=> {
    
    const fetchitems= async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const episodes = await axios(`https://www.breakingbadapi.com/api/episodes`)
      const quotes  = await axios(`https://www.breakingbadapi.com/api/quotes`)
      
      console.log(quotes.data)
      setQuotes(quotes.data)
     
      setEpisodes(episodes.data)
   setItems(result.data)
   setLoading(false)
    }
    fetchitems()
    
   
  }, [query])

  const queryFunction = (q) =>{
    setQuery(q)
  }

  return (
    <div className="App">
      <Header/>
      <Quotes quotes={quotes}/>
      <Searching getQuery={queryFunction} />
      <Caractor isLoading={loading} items={items} />
      <Episodes episodes={episodes}/>
    </div>
    
  );
}

export default App;
