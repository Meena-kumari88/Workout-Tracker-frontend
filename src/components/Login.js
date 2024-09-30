import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Footer from './ Footer'; 
import './Login.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token); 
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="login-page">
      <div className="login-left">
        <img
          src="https://th.bing.com/th/id/OIG2.f_4_SFVm9nJh.8HeFB7_?pid=ImgGn"
          alt="Login"
          className="login-image"
        />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome Back to Fittrack<span>👋</span></h2>
          <p>Please Login with your details here</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
          <p>If you don't have account <Link to="/signup" className="btn">SignUp</Link></p>
        </form>
      </div>
    </div>
    <Footer />
  </>
    
  );
};

export default Login;
