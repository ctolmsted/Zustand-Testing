import React from 'react';
// To use our Zustand store in this component, we simply have to import it in
import useCountStore from '../store/useCountStore';

export const DecrementButton = () => {
  const { decrementCount } = useCountStore((state) => state);

  return(
    <button id="decrement-button" onClick={decrementCount}>Decrement<br/><span>-</span></button>
  )
};


