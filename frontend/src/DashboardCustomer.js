import React, { useEffect, useState } from 'react';

export default function DashboardCustomer({ onLogout }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('/api/menus').then(res => res.json()).then(setMenus);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Customer Dashboard</h1>
      <button className="mb-4" onClick={onLogout}>Logout</button>
      <ul>
        {menus.map(menu => (
          <li key={menu._id} className="border p-2 mb-2">
            <h2 className="font-bold">{menu.name}</h2>
            <p>{menu.description}</p>
            <p className="text-sm">Ingredients: {menu.ingredients.join(', ')}</p>
            <p className="text-sm text-red-500">Allergens: {menu.allergens.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
