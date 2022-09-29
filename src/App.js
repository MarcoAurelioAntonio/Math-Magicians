import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Calculator from './components/calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <Router className="App">
    <Navbar />
    <Routes>
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Home" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
