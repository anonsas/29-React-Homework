import React, { useState } from 'react';

function Buttons() {
  const [showButton, setShowButton] = useState('');

  const printNumber = (index) => {
    setShowButton(index);
  };

  return (
    <>
      <h2>{showButton}</h2>
      <div className="buttons-container">
        {[...Array(50)].map((_, i) => (
          <button key={i} onClick={() => printNumber(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
