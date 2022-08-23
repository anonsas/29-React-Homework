import React, { useState } from 'react';
import rand from '../helpers/rand';

function Change() {
  const [figure, setFigure] = useState('circle');

  const changeFigure = () => {
    setFigure((prevState) => (prevState === 'circle' ? 'square' : 'circle'));
  };

  return (
    <div className="figure-container">
      <div className={`figure ${figure}`}>{rand(5, 25)}</div>
      <button onClick={changeFigure}>Change figure & number</button>
    </div>
  );
}

export default Change;
