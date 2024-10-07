import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src='https://img.freepik.com/premium-vector/fitness-icon-logo-vector-design-template_827767-2393.jpg' className='logoimg' alt="Logo" /><span className="text">WorkOut</span>
        
      </div>
      <div className="navbar-right">
        <a href="#explore" className="btn">Explore</a>
        <Link to="/signup" className="btn">SignUp</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
