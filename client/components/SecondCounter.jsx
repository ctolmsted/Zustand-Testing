import React from 'react';
import useCountStore from '../store/useCountStore';
import { IncrementAndTrackButton } from './IncrementAndTrackButton';
import { ResetButton } from './ResetButton';

export const SecondCounter = () => {
  const { testCount, testCountHolder } = useCountStore(state => state);
  let parsedCount = testCountHolder.map(num => num + ', ');

  return (
    <>
      <div id="second-counter">
        <p>Tester Count is: {testCount}</p>
        <p>Previous Counts are: {parsedCount}</p>
        <IncrementAndTrackButton />
        <ResetButton />
      </div>
    </>
  );
}