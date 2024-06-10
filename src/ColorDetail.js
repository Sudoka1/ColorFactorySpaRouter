import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function ColorDetail() {
  const { color } = useParams();
  const colors = JSON.parse(localStorage.getItem('colors')) || [];
  
  if (!colors.includes(color)) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <h2>{color}</h2>
    </div>
  );
}

export default ColorDetail;
