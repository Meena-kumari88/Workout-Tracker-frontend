import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import LogExercise from './components/LogExercise';
import Home from './components/Home';
import './App.css';




function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/log-exercise" element={<LogExercise />} />
    </Routes>
  </Router>
  );
}

export default App;
