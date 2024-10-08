import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const { username, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } 
    else {
      const newUser = { username, email, password };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post('/api/auth/register', body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        <input type="text" placeholder="Username" name="username" value={username} onChange={e => onChange(e)} />
      </div>
      <div>
        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
      </div>
      <div>
        <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} />
      </div>
      <div>
        <input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={e => onChange(e)} />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;