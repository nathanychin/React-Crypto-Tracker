import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Coin from './Coin';

function App() {
  
  // coins is the value, setCoins is the function to use on the value
  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch(() => alert('Error with API link'))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search for currencies</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filtered.coins.map(coin=>{
        return (
          <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol} 
            volume={coin.market_cap}
            price={coin.current_price}
          />
        )
      })}
    </div>
  )
}

export default App;
