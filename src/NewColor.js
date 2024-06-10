import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColor() {
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const colors = JSON.parse(localStorage.getItem('colors')) || [];
    colors.push(color);
    localStorage.setItem('colors', JSON.stringify(colors));
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color Name:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColor;
