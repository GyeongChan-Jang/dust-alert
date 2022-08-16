import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Favorite from './components/Favorite'
import Home from './components/Home'
import MyPlace from './components/MyPlace'
import NavBar from './components/NavBar'
import SelectBox from './components/SelectBox'
import TotalSido from './components/TotalSido'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  return (
    <div className="App relative">
      {isStarted && <SelectBox />}
      <Routes>
        <Route path="/" element={<Home setIsStarted={setIsStarted} />} />
        <Route path="/myplace" element={<MyPlace />} />
        <Route path="/total" element={<TotalSido />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {isStarted && <NavBar />}
    </div>
  )
}

export default App
