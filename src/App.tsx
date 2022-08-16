import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Favorite from './components/Favorite'
import Main from './components/Main'
import NavBar from './components/NavBar'
import SelectBox from './components/SelectBox'
import TotalSido from './components/TotalSido'

function App() {
  return (
    <div className="App">
      <SelectBox />
      <Card />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myplace" element={<Main />} />
        <Route path="/total" element={<TotalSido />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <NavBar />
    </div>
  )
}

export default App
