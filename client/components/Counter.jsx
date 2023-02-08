import React from 'react';
// To use our Zustand store in this component, we simply have to import it in
import useCountStore from '../store/useCountStore';

export const Counter = () => {
  const { count } = useCountStore((state) => state);

  return(
    <p id="counter-count">Counter is: {count}</p>
  )
};