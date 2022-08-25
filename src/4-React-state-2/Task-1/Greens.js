import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Greens() {
  const [trees, setTrees] = useState([
    {
      id: uuidv4(),
      name: 'azuolas',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'berzas',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'uosis',
      active: false,
    },
  ]);

  const activateTree = (treeId) => {
    // const newState = trees.map((tree) => {
    //   return tree.id === treeId ? { ...tree, active: !tree.active } : tree;
    // });
    // setTrees(newState);

    setTrees((prevState) => {
      return prevState.map((tree) => {
        return tree.id === treeId ? { ...tree, active: !tree.active } : tree;
      });
    });
  };

  return (
    <div className="field">
      {trees.map((tree) => (
        <div key={tree.id} className="field-item">
          <button onClick={() => activateTree(tree.id)}>{tree.name}</button>
          {tree.active && <div className="field-mini">{tree.name}</div>}
        </div>
      ))}
    </div>
  );
}

export default Greens;
