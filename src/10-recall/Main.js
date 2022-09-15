import React from 'react';
import './Main.scss';
import Square from './Square';
import Buttons from './Buttons';

function Main() {
  return (
    <div>
      <Square color="red" />
      <Buttons />
    </div>
  );
}

export default Main;
