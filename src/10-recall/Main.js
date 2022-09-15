import React, { useState, useEffect } from 'react';
import './Main.scss';
import Square from './Square';
import Buttons from './Buttons';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

function Main() {
  const [color, setColor] = useState(null);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    setColor(generateColor());
  }, [totalSum]);

  return (
    <div>
      <Square color="red" />
      <h2 style={{ color: color }}>{totalSum}</h2>
      <Buttons setTotalSum={setTotalSum} />
    </div>
  );
}

export default Main;
