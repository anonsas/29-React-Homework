import React from 'react';

function Buttons({ setTotalSum, addValue }) {
  const printNumber = (index) => {
    setTotalSum((prevState) => prevState + index);
  };

  return (
    <>
      <div className="buttons-container">
        {[...Array(50)].map((_, i) => (
          <button key={i} onClick={() => printNumber(i + 1 + addValue)}>
            {i + 1 + addValue}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
