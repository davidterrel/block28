import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <li><Link to="/blue">Blue</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/red">Red</Link></li>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/home" element={<Home />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
