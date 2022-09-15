import React, { useState } from 'react';
import './Main.scss';
import Square from './Square';
import Buttons from './Buttons';

function Main() {
  const [buttonsLength, setButtonsLength] = useState(50);
  // const sayBu = () => {
  //   console.log('%c Buuuu ', 'color: red');
  // };

  return (
    <div>
      <Square color="red" />
      <div className="buttons-container">
        {[...Array(buttonsLength)].map((_, i) => (
          <Buttons number={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default Main;
