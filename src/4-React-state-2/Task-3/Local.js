import React, { useState, useEffect } from 'react';

function Local() {
  const countLocalStorage = JSON.parse(localStorage.getItem('count')) || 0;
  const [count, setCount] = useState(countLocalStorage);

  const addCount = () => setCount((prevState) => prevState + 1);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <button onClick={addCount}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default Local;
