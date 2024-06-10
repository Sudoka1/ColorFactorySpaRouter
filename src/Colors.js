import React from 'react';
import { Link } from 'react-router-dom';

function Colors() {
  const colors = JSON.parse(localStorage.getItem('colors')) || [];
  return (
    <div>
      <h2>Colors List</h2>
      <ul>
        {colors.map(color => (
          <li key={color}><Link to={`/colors/${color}`}>{color}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
