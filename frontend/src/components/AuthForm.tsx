import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store';
import { register, login } from '../api';

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const data = isRegister
        ? await register(username, password)
        : await login(username, password);
      dispatch(setUser({ user: data.user, token: data.token }));
      // Redirect to dashboard or next step
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-2 px-3 py-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-2" type="submit">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <button
        className="text-blue-600 underline mt-2"
        onClick={() => setIsRegister(r => !r)}
      >
        {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default AuthForm;
