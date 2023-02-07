import React from 'react';
import useCountStore from '../store/useCountStore';

export const IncrementAndTrackButton = () => {
  const { incrementAndPushCount } = useCountStore(state => state);

  return (
    <button id="tester-count-button" onClick={incrementAndPushCount}>Click to Increment Count and keep track of counts</button>
  );
}