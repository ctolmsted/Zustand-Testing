import React from 'react';
import useCountStore from '../store/useCountStore';

export const ResetButton = () => {
  const { resetCount } = useCountStore(state => state);

  return (
    <button id="tester-count-reset-button" onClick={resetCount}>Click to Reset Counter and Tracker</button>
  );
}