import React from 'react';

function Gyvunai({ num }) {
  const bgColor = num === 1 ? 'blue' : 'red';

  return <h1 style={{ color: bgColor }}>Zebrai ir Bebrai</h1>;
}

export default Gyvunai;
