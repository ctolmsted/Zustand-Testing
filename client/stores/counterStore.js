// Need to import the 'create' API from 'zustand' in order to create our store
import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

// Stores in Zustand are just custom hooks! Our store can be anything: primitives, objects, functions, etc.
// The 'create' API will help us create stores, and it will automatically return to us the 'set' callback function
// State has to be updated immutably (following React standards, think 'useState'), and so we use the given 'set' function to help us do that

// 'set' takes 3 arguments:
//    1. the store
//    2. a boolean: defaults to 'false' which performs automatic state merging; 'true' would overwrite state with what was passed into the first argument
//    3. a string: specified the action type (optional, but useful for the devtools)

/* Since our Stores are Hooks, we should follow React best-practices, and append 'use' to our Store names */
export const useCounterStore = create(devtools(set => ({ // Wrapping devtools around the store
  // Our store comprises of our State(s), Action(s), and Reducer(s)
  // Here is our State, which is just a property called 'count' with the value of 0
  count: 0,
  // Here are our Actions and Reducers (no need for dispatch() or Action Objects/Creators as compared to Redux!)
  // See here that we only need to select the state to be modified, and we don't have to spread the state (...state) as compared to Redux
  // This is because 'set' is passed a second argument of 'false', enabling automatic state merging
  incrementCount: () => set(state => ({count: state.count + 1}), false, 'incrementCount'),
  decrementCount: () => set(state => ({count: state.count - 1}), false, 'decrementCount')
})));

// We can define and export our Zustand stores in one file, and import it for use in our components that need access to some part(s) of each store
// (see: 'IncrementButton.jsx', 'DecrementButton.jsx', 'Counter.jsx' in this example)

// Zustand works best with React, but it is designed to work with any front-end framework/library that deals with state as Zustand a state-management library
// We'll have to consider if the DevTool we are looking to create can work with non-React applications without much, if any, modifications