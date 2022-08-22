import React from 'react';

function Bala({ id, type, name, color }) {
  return (
    <div className="bala" style={{ backgroundColor: color }}>
      <p>{id}</p>
      <p>{type}</p>
      <p>{name}</p>
      <p>{color}</p>
    </div>
  );
}

export default Bala;
