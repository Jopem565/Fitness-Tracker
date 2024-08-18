import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Workouts from './components/Workouts';
import AddWorkout from './components/AddWorkout';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/add-workout" element={<AddWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;