import React from 'react';

function Daiktas({ id, type, name }) {
  return (
    <>
      <p>
        {id}: {type} - {name}
      </p>
    </>
  );
}

export default Daiktas;
