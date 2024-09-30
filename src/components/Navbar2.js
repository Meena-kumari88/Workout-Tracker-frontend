import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

function Navbar2({ onLogExerciseClick }) { 
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src='https://img.freepik.com/premium-vector/fitness-icon-logo-vector-design-template_827767-2393.jpg' className='logoimg' alt="Logo" />
        <span className="text">Workout</span>
      </div>
      <div className="navbar-right">
  
        <Link to="/" className="btn">Home</Link>
        <button onClick={onLogExerciseClick} className="btn">
          Log Exercise
        </button>
      </div>
    </nav>
  );
}

export default Navbar2;
