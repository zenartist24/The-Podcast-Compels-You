import { useState } from 'react'
import './App.css'
import {Route, Routes, Link} from "react-router-dom"
import Movies from './components/Movies'
import About from './components/About'
import Home from './components/Home'

function App() {

  return (
    <>
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
    
  )
}

export default App
