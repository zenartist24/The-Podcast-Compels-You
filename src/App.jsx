import { useState } from 'react'
import './App.css'
import {Route, Routes, Link} from "react-router-dom"
import Movies from './components/Movies'

function App() {

  return (
    <>

      
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>


  )
}

export default App
