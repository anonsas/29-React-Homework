import React from 'react';

const sortByInput = (input, array) => {
  return array
    .sort((a, b) => a[input].localeCompare(b[input]))
    .map((planner) => (
      <div key={planner.id} className="flex">
        <p>{planner.id}</p>
        <p>{planner.type}</p>
        <p>{planner.name}</p>
        <p>{planner.color}</p>
      </div>
    ));
};

function Vandenynas({ seaPlaners }) {
  return (
    <div>
      <h2>Task 4</h2>
      <Tipas seaPlaners={seaPlaners} />
      <Vardas seaPlaners={seaPlaners} />
      <Spalva seaPlaners={seaPlaners} />
    </div>
  );
}

//======================================
function Tipas({ seaPlaners }) {
  return (
    <div>
      <h4>Pagal Tipas</h4>
      {sortByInput('type', seaPlaners)}
    </div>
  );
}

function Vardas({ seaPlaners }) {
  return (
    <div>
      <h4>Pagal Vardas</h4>
      {sortByInput('name', seaPlaners)}
    </div>
  );
}

function Spalva({ seaPlaners }) {
  return (
    <div>
      <h4>Pagal Spalva</h4>
      {sortByInput('color', seaPlaners)}
    </div>
  );
}
export default Vandenynas;
