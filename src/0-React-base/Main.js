import React from 'react';

import rand from '../helpers/rand';

import Zuikis from './Zuikis';
import Greeting from './Greeting';
import Gyvunai from './Gyvunai';
import Title from './Title';
import Triple from './Triple';

function Main() {
  return (
    <>
      <Zuikis />
      <Greeting text="React is beast" />
      <Gyvunai num={rand(1, 2)} />
      <Title heading="The Papa" subHeading="The Mama" />
      <Triple textH1="Primary" textH2="Secondary" color="orangered" />
    </>
  );
}

export default Main;
