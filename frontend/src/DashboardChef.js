import React, { useEffect, useState } from 'react';

export default function DashboardChef({ onLogout }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [menus, setMenus] = useState([]);

  const loadMenus = () => {
    fetch('/api/menus').then(res => res.json()).then(data => setMenus(data));
  };

  useEffect(() => {
    loadMenus();
  }, []);

  const submit = async e => {
    e.preventDefault();
    await fetch('/api/menus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ name, description })
    });
    setName('');
    setDescription('');
    loadMenus();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Chef Dashboard</h1>
      <button className="mb-4" onClick={onLogout}>Logout</button>
      <form onSubmit={submit} className="mb-4">
        <input className="border p-2 mr-2" placeholder="Menu name" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2" type="submit">Add</button>
      </form>
      <ul>
        {menus.filter(m => m.chef && m.chef._id === localStorage.getItem('userId')).map(menu => (
          <li key={menu._id} className="border p-2 mb-2">
            <h2 className="font-bold">{menu.name}</h2>
            <p>{menu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
