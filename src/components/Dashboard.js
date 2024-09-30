import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import LogExercise from './LogExercise'; 
import './Dashboard.css'; 
import './LogExercise.css'; 
import Footer from './ Footer';
import Navbar2 from './Navbar2'; 

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchWorkouts = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const response = await axios.get(`http://localhost:5000/api/workouts/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const formatDate = (utcDateString) => {
    const date = new Date(utcDateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  };

  const formatTime = (utcDateString) => {
    const date = new Date(utcDateString);
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <>
     <Navbar2 onLogExerciseClick={() => setShowForm(!showForm)} />
      <div className="dashboard-container">
        {showForm && (
          <div className="form-container">
            <LogExercise
              refreshWorkouts={fetchWorkouts}
              onSubmit={() => setShowForm(false)}
            />
          </div>
        )}

        <table className="workout-table">
          <thead>
            <tr>
              <th>Exercise Type</th>
              <th>Duration</th>
              <th>Intensity</th>
              <th>Calories Burned</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout._id}>
                <td>{workout.type}</td>
                <td>{workout.duration} min</td>
                <td>{workout.intensity}</td>
                <td>{workout.calories_burned}</td>
                <td>{formatDate(workout.date)}</td>
                <td>{formatTime(workout.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
    
  );
};

export default Dashboard;
