import React, { useState } from 'react';

function ToggleBtn() {
  const [figure, setFigure] = useState('circle');

  const changeFigure = () => {
    setFigure((prevState) => (prevState === 'circle' ? 'square' : 'circle'));
  };

  return (
    <div className="figure-container">
      <div className={`figure ${figure}`}>{figure}</div>
      <button onClick={changeFigure}>Change figure</button>
    </div>
  );
}

export default ToggleBtn;
