import React from 'react';

function Jura({ seaPlaners }) {
  const checkType = (id, type, name) => {
    switch (type) {
      case 'man':
        return <Valtis key={id} type={type} name={name} />;

      case 'car':
        return <Laivas key={id} type={type} name={name} />;

      case 'animal':
        return <Sala key={id} type={type} name={name} />;

      default:
        return (
          <div key={id} className="flex">
            <h4>Jura</h4>
            <p>
              {type} - {name}
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <h2>Task 3</h2>
      {seaPlaners.map((planner) => checkType(planner.id, planner.type, planner.name))}
    </>
  );
}

//===================================
function Laivas({ type, name }) {
  return (
    <div className="flex">
      <h4>Laivas</h4>
      <p>
        {type} - {name}
      </p>
    </div>
  );
}

function Valtis({ type, name }) {
  return (
    <div className="flex">
      <h4>Valtis</h4>
      <p>
        {type} - {name}
      </p>
    </div>
  );
}

function Sala({ type, name }) {
  return (
    <div className="flex">
      <h4>Sala</h4>
      <p>
        {type} - {name}
      </p>
    </div>
  );
}

export default Jura;
