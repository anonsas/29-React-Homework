import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const decreaseBy3 = () => setCounter((prevState) => prevState - 3);
  const increaseBy1 = () => setCounter((prevState) => prevState + 1);

  return (
    <div className="counter">
      <button onClick={decreaseBy3}>-</button>
      <p>Count: {counter}</p>
      <button onClick={increaseBy1}>+</button>
    </div>
  );
}

export default Counter;
