import React, { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken.js';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const user = { email, password };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(user);
      const res = await axios.post('/api/auth/login', body, config);
      setAuthToken(res.data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
      </div>
      <div>
        <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};
export default Login;