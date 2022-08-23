import React from 'react';
import Daiktas from './Daiktas';

function Tvenkinys({ seaPlaners }) {
  return (
    <div className="porinisNeporinis">
      <div>
        <h3>Poriniai:</h3>
        {seaPlaners.map(
          ({ id, type, name }) =>
            id % 2 === 0 && <Daiktas key={id} id={id} type={type} name={name} />
        )}
      </div>

      <div>
        <h3>Neporiniai:</h3>
        {seaPlaners.map(
          ({ id, type, name }) =>
            id % 2 === 1 && <Daiktas key={id} id={id} type={type} name={name} />
        )}
      </div>
    </div>
  );
}

export default Tvenkinys;
