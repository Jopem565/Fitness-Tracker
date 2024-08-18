import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/workouts/your_user_id');
        setWorkouts(response.data);
      } 
      catch (err) {
        console.error(err);
      }
    };

    fetchWorkouts();
  }, []);
  
//User input search bars
  return (
    <div>                            
      <h1>Your Workouts</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>
            {workout.exercises.map((exercise) => (
              <div key={exercise.name}>
                <h3>{exercise.name}</h3>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Weight: {exercise.weight}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;