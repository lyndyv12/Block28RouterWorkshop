import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Green from './Green';
import Yellow from './Yellow';
import Purple from './Purple';
import Orange from './Orange';
import Home from './Home';
import NavBar from './NavBar';

function App() {

  const [colors, setColors] = useState(['Blue', 'Green', 'Red'])

  return (
    <>
    <div id="container">
      <NavBar colors={colors}/>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home setColors={setColors} colors={colors} />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/purple" element={<Purple />} />
          <Route path="/orange" element={<Orange />} />
          
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
