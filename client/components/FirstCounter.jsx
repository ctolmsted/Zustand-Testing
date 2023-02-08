import React from 'react';
import { DecrementButton } from './DecrementButton';
import { IncrementButton } from './IncrementButton';
import { Counter } from './Counter';

export const FirstCounter = () => {

  return (
    <div id="first-counter">
      <h2>Click on the buttons to Increment or Decrement the Counter</h2>
      <div id="buttons">
        <DecrementButton />
        <IncrementButton />
      </div>
      <Counter />
    </div>
  )
};
