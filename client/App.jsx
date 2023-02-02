import React from 'react';
import { DecrementButton } from './components/DecrementButton';
import { IncrementButton } from './components/IncrementButton';
import { Counter } from './components/Counter';

const App = () => {
  return(
    <>
      <h2>Click on the buttons to Increment or Decrement the Counter</h2>
      <div id="buttons">
        <DecrementButton />
        <IncrementButton />
      </div>
      <Counter />
    </>
  )
};

export default App;
