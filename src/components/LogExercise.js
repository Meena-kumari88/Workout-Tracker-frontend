import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Named import here
import './LogExercise.css';

const LogExercise = ({ onClose }) => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    setDateTime(formattedDate);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
  
    const decodedToken = jwtDecode(token); 
    const userId = decodedToken.id;
  
    try {
      await axios.post('https://workout-tracker-backend-3.onrender.com/api/workouts', {
        user_id: userId,
        type,
        duration,
        intensity,
        calories_burned: caloriesBurned,
        date_time: dateTime,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Workout logged!');
      
      if (typeof onClose === 'function') {
        onClose(); 
      }
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        if (error.response.data) {
          alert(error.response.data.error || 'An error occurred while logging your workout.');
        } else {
          alert('An error occurred: ' + error.message);
        }
      } else {
        alert('Network error or server not reachable. Please try again.');
      }
    }
  };

  return (
    <div className="log-exercise-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={dateTime} disabled readOnly />
        <select onChange={(e) => setType(e.target.value)} required>
          <option value="">Select Exercise Type</option>
          <option value="Running">Running</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
          <option value="Weightlifting">Weightlifting</option>
          <option value="Yoga">Yoga</option>
          <option value="Pilates">Pilates</option>
          <option value="Dance">Zumba</option>
          <option value="HIIt">HIIT</option>
          <option value="Crossfit">Crossfit</option>
          <option value="DanceFitness">Dance Fitness</option>
          <option value="Cardio">Cardio</option>
          <option value="StrengthTraining">Strength Training</option>
          <option value="Stretching">Stretching</option>
        </select>
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <select onChange={(e) => setIntensity(e.target.value)} required>
          <option value="">Select Intensity</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
        <input
          type="number"
          placeholder="Calories Burned"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          required
        />
        <button type="submit">Log Exercise</button>
      </form>
    </div>
  );
};

export default LogExercise;
