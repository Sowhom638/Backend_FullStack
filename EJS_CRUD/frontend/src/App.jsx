import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/create" element={<Create />} />
        <Route path="/movie/update/:id" element={<Update />} />
        <Route path="/movie/delete/:id" element={<Delete />} />
      </Routes>
    </>
  )
}

export default App
