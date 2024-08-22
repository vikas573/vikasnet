import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
      navigate('/home');
    } else {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div>
      <div className="header-links">
        <a href="/contact-us">Contact Us</a>
        <a href="/about-us">About Us</a>
      </div>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
