import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  
  // coins is the value, setCoins is the function to use on the value
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch(() => alert('Error with API link'))
  }, [])

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search for currencies</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" />
        </form>
      </div>
      
    </div>
  )
}

export default App;
