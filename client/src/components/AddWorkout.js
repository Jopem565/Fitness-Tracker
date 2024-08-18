import React, { useState } from 'react';
import axios from 'axios';

const AddWorkout = () => {
  const [workoutData, setWorkoutData] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: ''
  });

  const { exercise, sets, reps, weight } = workoutData;

  const onChange = e => setWorkoutData({ ...workoutData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      };
      const body = JSON.stringify(workoutData);
      try {
        const res = await axios.post('/api/workouts', body, config);
        console.log(res.data);
        // Optionally, clear the form or provide feedback to the user
      } catch (err) {
        console.error(err.response.data);
      }
    } else {
      console.log('No token found, please log in.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Exercise"
          name="exercise"
          value={exercise}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Sets"
          name="sets"
          value={sets}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Reps"
          name="reps"
          value={reps}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Weight"
          name="weight"
          value={weight}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Save Workout</button>
      <button type="submit">Add Workout</button> 
    </form>
  );
};

export default AddWorkout;