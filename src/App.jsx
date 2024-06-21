import React from 'react'
import{Routes,Route } from 'react-router-dom'
import Exchanges from './components/Exchanges'
import Coin from './components/Coin'
import CoinDetail from './components/CoinDetail'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Exchanges/>}/>
    <Route path='/coins' element={<Coin/>}/>
    <Route path='/coins/:id' element = {<CoinDetail/>}/>
   </Routes>
   
  )
}

export default App
