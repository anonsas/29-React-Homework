import React from 'react';

const checkType = (props) => {
  switch (props.type) {
    case 'man':
      return <Namas key={props.id} planer={props} />;
    case 'car':
      return <Garazas key={props.id} planer={props} />;
    case 'animal':
      return <Narvas key={props.id} planer={props} />;
    case 'fish':
      return <Akvariumas key={props.id} planer={props} />;
    default:
      return null;
  }
};

function Pasaulis({ seaPlaners }) {
  return (
    <div className="flex">
      <h2>Task 5</h2>
      <div>
        <h4>Poriniai</h4>
        {seaPlaners.map((planer) => planer.id % 2 === 0 && checkType(planer))}
      </div>

      <div>
        <h4>Neporiniai</h4>
        {seaPlaners.map((planer) => planer.id % 2 === 1 && checkType(planer))}
      </div>
    </div>
  );
}

function Namas({ planer }) {
  const { id, type, name, color } = planer;

  return (
    <div className="flex">
      <h4>Namas</h4>
      <div className="flex">
        <p>{id}</p>
        <p>{type}</p>
        <p style={{ color: color }}>{name}</p>
      </div>
    </div>
  );
}

function Narvas({ planer }) {
  const { id, type, name, color } = planer;

  return (
    <div className="flex">
      <h4>Narvas</h4>
      <div className="flex">
        <p>{id}</p>
        <p>{type}</p>
        <p style={{ color: color }}>{name}</p>
      </div>
    </div>
  );
}

function Garazas({ planer }) {
  const { id, type, name, color } = planer;

  return (
    <div className="flex">
      <h4>Garazas</h4>
      <div className="flex">
        <p>{id}</p>
        <p>{type}</p>
        <p style={{ color: color }}>{name}</p>
      </div>
    </div>
  );
}

function Akvariumas({ planer }) {
  const { id, type, name, color } = planer;

  return (
    <div className="flex">
      <h4>Akvariumas</h4>
      <div className="flex">
        <p>{id}</p>
        <p>{type}</p>
        <p style={{ color: color }}>{name}</p>
      </div>
    </div>
  );
}

export default Pasaulis;
