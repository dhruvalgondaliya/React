export const Add = (payload) => {
  return (dispatch) => {
    // Perform asynchronous tasks here
    // For example, you can make an API call before dispatching the actual action
    setTimeout(() => {
      console.log("Hello");
    }, 5000);
    dispatch({
      type: "ADD",
      payload
    });
  };
};

export const Delete = (payload) => {
  return {
    type: "DELETE",
    payload
  };
};

export const Edit = (payload) => {
  return {
    type: "EDIT",
    payload
  };
};

export const Inc = (num) => {
  return {
    type: "INCREMENT",
    payload: num
  };
};

export const Dec = (num) => {
  return {
    type: "DECREMENT",
    payload: num
  };
};


// export const startTimer = () => {
//   return (dispatch) => {
//     dispatch({ type: "START_TIMER" });
//     const interval = setInterval(() => {
//       dispatch({ type: "UPDATE_TIMER" });
//     }, 1000);
//     dispatch({ type: "SET_INTERVAL", payload: interval });
//   };
// };

// export const stopTimer = () => {
//   return (dispatch, getState) => {
//     clearInterval(getState().interval);
//     dispatch({ type: "STOP_TIMER" });
//   };
// };

// startTimer function:

// This function is used to start a timer by dispatching actions to the Redux store.
// It returns a function that takes dispatch as an argument, which is provided by Redux Thunk middleware.
// Inside this function, it first dispatches an action of type "START_TIMER" to indicate that the timer has started.
// Then, it sets up an interval using setInterval function, which dispatches an "UPDATE_TIMER" action every 1000 milliseconds (1 second).
// Finally, it dispatches an action of type "SET_INTERVAL" with the interval value as payload, which can be used to later clear the interval.
// stopTimer function:

// This function is used to stop the timer that was started using the startTimer function.
// It returns a function that takes dispatch and getState as arguments, where getState is a function provided by Redux Thunk to access the current state of the Redux store.
// Inside this function, it first clears the interval using clearInterval by passing the interval ID obtained from getState().interval.
// Then, it dispatches an action of type "STOP_TIMER" to indicate that the timer has been stopped.
