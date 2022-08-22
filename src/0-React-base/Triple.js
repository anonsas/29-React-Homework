import React from 'react';

function Triple({ textH1, textH2, color }) {
  return (
    <>
      <h1 style={{ color: color }}>{textH1}</h1>
      <h2 style={{ color: color }}>{textH2}</h2>
    </>
  );
}

export default Triple;
