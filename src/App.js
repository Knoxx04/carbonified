import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Estimates from './components/Estimates';
import SignUp from './components/SignUp';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Estimates" element={<Estimates/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;