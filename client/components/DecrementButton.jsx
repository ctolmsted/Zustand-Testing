import React from 'react';
// To use our Zustand store in this component, we simply have to import it in
import { useCounterStore } from '../stores/counterStore';

export const DecrementButton = () => {
  // once imported, we can destructure only parts of the store that the component needs
  // here, the 'DecrementButton' component only needs the 'decrementCount' action
  // which will be assigned to the button's 'onClick' JSX attribute
  const { decrementCount } = useCounterStore((state) => state);
  // equivalent to: "const decrementCount = useCounterStore((state) => state.decrementCount)"

  return(
    // when the button is clicked, it will automatically dispatch the action and fire our 'decrementCount' reducer,
    // modifying our state and letting React know to re-render the component rendering the state's 'count' property
    <button id="decrement-button" onClick={decrementCount}>Decrement<br/><span>-</span></button>
  )
};


