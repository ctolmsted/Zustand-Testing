import React from 'react';
// To use our Zustand store in this component, we simply have to import it in
import { useCounterStore } from '../stores/counterStore';

export const Counter = () => {
  // Here, we are just pulling the 'count' property from our state...
  const { count } = useCounterStore((state) => state);
  // equivalent to: "const count = useCounterStore((state) => state.count)"

  return(
    // ...to have its value be displayed on the page
    // This component will be re-rendered every time the state's 'count' property is updated
    <p id="counter-count">Counter is: {count}</p>
  )
};