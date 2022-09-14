import React from 'react';
import Square from './Square';

function Main() {
  const sayBu = () => {
    console.log('%c Buuuu ', 'color: red');
  };
  return (
    <div>
      <Square color="red" />
      <button onClick={sayBu}>Buuuu</button>
    </div>
  );
}

export default Main;
