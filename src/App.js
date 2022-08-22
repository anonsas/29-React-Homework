import './App.css';
import rand from './helpers/rand';

import Zuikis from './0-React-base/Zuikis';
import Greeting from './0-React-base/Greeting';
import Gyvunai from './0-React-base/Gyvunai';
import Title from './0-React-base/Title';
import Triple from './0-React-base/Triple';

function App() {
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

export default App;
