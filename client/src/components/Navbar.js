import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
  
          <Link to="/register"> Register</Link>
 
          <Link to="/login"> Login</Link>
   
          <Link to="/workouts"> Workouts</Link>
   
          <Link to="/add-workout"> Add Workout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;