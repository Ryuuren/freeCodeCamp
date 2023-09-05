// Define action type constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Define the counter reducer function
const counterReducer = (state = 0, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    case INCREMENT:
      // If the action type is INCREMENT, increase the state by 1
      return state + 1;
    case DECREMENT:
      // If the action type is DECREMENT, decrease the state by 1
      return state - 1;
    default:
      // If the action type is unknown or not relevant, return the current state
      return state;
  }
};

// Define an action creator for incrementing
const incAction = () => {
  return {
    type: INCREMENT, // Set the action type to INCREMENT
  };
};

// Define an action creator for decrementing
const decAction = () => {
  return {
    type: DECREMENT, // Set the action type to DECREMENT
  };
};

// Create the Redux store, passing in the reducer and initial state
const store = Redux.createStore(counterReducer, 0);
