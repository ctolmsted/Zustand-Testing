import React from 'react';
// To use our Zustand store in this component, we simply have to import it in
import useCountStore from '../store/useCountStore';

export const IncrementButton = () => {
  const { incrementCount } = useCountStore((state) => state);
  
  return(
    <button id="increment-button" onClick={incrementCount}>Increment<br/><span>+</span></button>
  )
};