import React from 'react';
import './Main.scss';
import Greens from './Task-1/Greens';
import Black from './Task-2/Black';
import Local from './Task-3/Local';

function Main() {
  return (
    <div className="main">
      <Greens />
      <Black />
      <Local />
    </div>
  );
}

export default Main;
