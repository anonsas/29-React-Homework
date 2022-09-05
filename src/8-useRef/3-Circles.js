import React, { useRef } from 'react';

function Circles() {
  const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const changeColorsHandler = () => {
    circle1.current.style.background = generateColor();
    circle2.current.style.background = generateColor();
    circle3.current.style.background = generateColor();
  };

  return (
    <div className="main">
      <button type="button" onClick={changeColorsHandler}>
        Change colors
      </button>
      <div className="square-list">
        <div className="circle" ref={circle1} style={{ background: generateColor() }}>
          circle 1
        </div>
        <div className="circle" ref={circle2} style={{ background: generateColor() }}>
          circle 2
        </div>
        <div className="circle" ref={circle3} style={{ background: generateColor() }}>
          circle 2
        </div>
      </div>
    </div>
  );
}

export default Circles;
