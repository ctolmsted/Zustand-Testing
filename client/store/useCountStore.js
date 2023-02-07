// Need to import the 'create' API from 'zustand' in order to create our store
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useCountStore = create(devtools(set => ({
  count: 0,
  incrementCount: () => set(state => ({count: state.count + 1}), false, 'incrementCount'),
  decrementCount: () => set(state => ({count: state.count - 1}), false, 'decrementCount'),
  
  testCount: 0,
  testCountHolder: [],
  incrementAndPushCount: () => set(state => ({
    testCount: state.testCount + 1,
    testCountHolder: [...state.testCountHolder, state.testCount],
  }), false, 'incrementAndPushCount'),
  resetCount: () => set({
    testCount: 0,
    testCountHolder: []
  }, false, 'resetCount'),
})));

useCountStore.subscribe(console.log);

window.store = useCountStore;
export default useCountStore;