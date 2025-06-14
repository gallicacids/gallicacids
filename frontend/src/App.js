import React, { useState } from 'react';
import Login from './Login.js';
import DashboardCustomer from './DashboardCustomer.js';
import DashboardChef from './DashboardChef.js';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  const handleLogin = (tk, rl) => {
    localStorage.setItem('token', tk);
    localStorage.setItem('role', rl);
    setToken(tk);
    setRole(rl);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
  };

  if (!token) return <Login onLogin={handleLogin} />;
  if (role === 'customer') return <DashboardCustomer onLogout={logout} />;
  if (role === 'chef') return <DashboardChef onLogout={logout} />;
  return <div>Unknown role</div>;
}
