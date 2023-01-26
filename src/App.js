import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
//import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navbar />} />
        <Route path="/login" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
