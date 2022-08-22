import React from 'react';

function Skaicius({ dog, ilgis }) {
  return (
    <div style={{ color: ilgis > 6 ? 'green' : 'red' }}>
      <p>
        {dog}-{ilgis}
      </p>
    </div>
  );
}

export default Skaicius;
