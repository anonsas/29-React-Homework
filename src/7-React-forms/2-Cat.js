import React, { useEffect, useState } from 'react';

function Cat() {
  const [totalWeight, setTotalWeight] = useState(0);
  const [catList, setCatList] = useState(null);
  const [cat, setCat] = useState({
    name: '',
    weight: '',
  });

  const handleCatChange = (e) => {
    setCat((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setCatList((prevState) => [...prevState, cat].sort((a, b) => +a.weight - +b.weight));
    setCat({
      name: '',
      weight: '',
    });
  };

  useEffect(() => {
    if (catList === null) {
      const cats = localStorage.getItem('cats');
      cats === null ? setCatList([]) : setCatList(JSON.parse(cats));
    } else {
      localStorage.setItem('cats', JSON.stringify(catList));
    }
  }, [catList]);

  useEffect(() => {
    setTotalWeight(catList?.reduce((total, curr) => total + +curr.weight, 0));
  }, [catList]);

  return (
    <div>
      <div className="cat-form">
        <div>
          <label htmlFor="name">Cat's name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={cat.name}
            onChange={handleCatChange}
          />
        </div>
        <div>
          <label htmlFor="weight">Cat's weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={cat.weight}
            onChange={handleCatChange}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Register Cat
        </button>
      </div>

      <div className="cat-list">
        <h4>Total Cat's weight: {totalWeight}kg</h4>
        <h4>Cats List by Weight:</h4>
        {catList?.map((cat, i) => (
          <div key={i} className="cat">
            <span>{cat.name}</span>
            <span>{cat.weight}kg</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cat;
