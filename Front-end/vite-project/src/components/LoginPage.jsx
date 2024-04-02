import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/login`, { username, password });
      if (response.data.role === 'student') {
        navigate("/student");
      } else if (response.data.role === 'staff') {
        navigate("/staff");
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
