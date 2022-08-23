import React from 'react';
import './Main.scss';

import ToggleBtn from './1-ToggleBtn';
import Change from './2-Change';
import Counter from './3-Counter';
import Kvadratai from './4-Kvadratai';
import Squares from './5-Squares';

function Main() {
  return (
    <>
      <ToggleBtn />
      <Change />
      <Counter />
      <Kvadratai />
      <Squares />
    </>
  );
}

export default Main;
