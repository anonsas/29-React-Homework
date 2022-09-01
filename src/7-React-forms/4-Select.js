import React, { useState } from 'react';

function Select() {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState({
    color: 'red',
    fontSize: '10',
    fontFamily: 'Arial',
  });

  const handleChange = (e) => {
    setSelect((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="cat-form">
        <div>
          <label htmlFor="color">Color: </label>
          <select name="color" id="color" value={select.color} onChange={handleChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="violet">Violet</option>
          </select>
        </div>

        <div>
          <label htmlFor="fontSize">Font Size: </label>
          <select
            name="fontSize"
            id="fontSize"
            value={select.fontSize}
            onChange={handleChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>

        <div>
          <label htmlFor="fontFamily">Font Family: </label>
          <select
            name="fontFamily"
            id="fontFamily"
            value={select.fontFamily}
            onChange={handleChange}
          >
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Helvetica">Helvetica</option>
          </select>
        </div>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        {input && (
          <h4
            style={{
              color: select.color,
              fontFamily: select.fontFamily,
              fontSize: `${select.fontSize}px`,
            }}
          >
            {input}
          </h4>
        )}
      </div>
    </div>
  );
}

export default Select;
