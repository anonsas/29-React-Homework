import React from 'react';

function Title({ heading, subHeading }) {
  return (
    <>
      <h1>{heading}</h1>
      <h2>{subHeading}</h2>
    </>
  );
}

export default Title;
