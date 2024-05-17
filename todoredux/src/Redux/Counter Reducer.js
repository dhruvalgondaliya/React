const initialState = 0;

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":
      return state - action.payload;

      default :
      return state;
  }
};





// redux thunk start
// const initialState = {
//   timer: 0,
//   interval: null,
//   isRunning: false
// };

// const reducerThunk = (state = initialState, action) => {
//   switch (action.type) {
//     case "START_TIMER":
//       return { ...state, isRunning: true };
//     case "UPDATE_TIMER":
//       return { ...state, timer: state.timer + 1 };
//     case "STOP_TIMER":
//       return { ...state, timer: 0, isRunning: false, interval: null };
//     case "SET_INTERVAL":
//       return { ...state, interval: action.payload };
//     default:
//       return state;
//   }
// };

// export default reducerThunk;

// initialState:

// This object defines the initial state of the Redux store for the timer application.
// It includes three properties:
// timer: Represents the current value of the timer.
// interval: Stores the interval ID used for the timer.
// isRunning: Indicates whether the timer is currently running or not.
// reducerThunk function:

// This function is a Redux reducer that takes the current state and an action as input and returns the new state based on the action type.
// Inside the switch statement, different cases are handled based on the action.type:
// "START_TIMER": Updates the state to set isRunning to true when the timer starts.
// "UPDATE_TIMER": Increments the timer value by 1 to update the timer value.
// "STOP_TIMER": Resets the timer value to 0, sets isRunning to false, and clears the interval by setting it to null when the timer is stopped.
// "SET_INTERVAL": Updates the state by setting the interval property to the payload value passed in the action.
// default: Returns the current state if the action type does not match any of the defined cases.
