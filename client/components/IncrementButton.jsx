import React from 'react';
// To use our Zustand store in this component, we simply have to import it in
import { useCounterStore } from '../stores/counterStore';

export const IncrementButton = () => {
  // once imported, we can destructure only parts of the store that the component needs
  // here, the 'IncrementButton' component only needs the 'incrementCount' action
  // which will be assigned to the button's 'onClick' JSX attribute
  const { incrementCount } = useCounterStore((state) => state);
  // equivalent to: "const incrementCount = useCounterStore((state) => state.incrementCount)"
  
  return(
    // when the button is clicked, it will automatically dispatch the action and fire our 'incrementCount' reducer,
    // modifying our state and letting React know to re-render the component rendering the state's 'count' property
    <button id="decrement-button" onClick={incrementCount}>Increment<br/><span>+</span></button>
  )
};