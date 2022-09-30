import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="main-container">
    <h1 className="main-title">Math Magicians</h1>
    <nav className="nav">
      <span><Link className="link-1" to="/">Home</Link></span>
      <span className="link-2">|</span>
      <span><Link className="link-1" to="Calculator">Calculator</Link></span>
      <span className="link-2">|</span>
      <span><Link className="link-1" to="Quote">Quote</Link></span>
    </nav>
  </header>
);

export default Navbar;
