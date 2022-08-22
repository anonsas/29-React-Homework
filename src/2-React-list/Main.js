import React from 'react';

import Bala from './1-Task/Bala';
import Tvenkinys from './2-Task/Tvenkinys';
import Jura from './3-Task/Jura';
import Vandenynas from './4-Task/Vandenynas';
import Pasaulis from './5-Task/Pasaulis';

function Main() {
  const seaPlaners = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
  ];
  return (
    <>
      <div>
        {seaPlaners.map(({ id, type, name, color }) => (
          <Bala key={id} id={id} type={type} name={name} color={color} />
        ))}
      </div>

      <Tvenkinys seaPlaners={seaPlaners} />

      <Jura seaPlaners={seaPlaners} />

      <Vandenynas seaPlaners={seaPlaners} />

      <Pasaulis seaPlaners={seaPlaners} />
    </>
  );
}

export default Main;
