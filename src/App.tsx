import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="text-center text-red-500 font-dreams1">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams2 ">미세먼지알리미</div>
      <div className="text-center text-red-500">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams4">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams5">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams6">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams7">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams8">미세먼지알리미</div>
      <div className="text-center text-red-500 font-dreams9">미세먼지알리미</div>
      <NavBar />
    </div>
  )
}

export default App
