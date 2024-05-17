// import {
//   combineReducers,
//   legacy_createStore as createStore,
//   applyMiddleware
// } from "redux";
// import { thunk } from "redux-thunk";
// import { reducer } from "./Reducer";
// import { CounterReducer } from "./Counter Reducer";

// const rootReducers = combineReducers({
//   reducer: reducer,
//   CouterReducer: CounterReducer
// });

// const store = createStore(rootReducers, applyMiddleware(thunk));

// export default store;

// store.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducerThunk from "./Counter Reducer";

const store = createStore(reducerThunk, applyMiddleware(thunk));

export default store;

// import { legacy_createStore as createStore, applyMiddleware } from "redux";:

// This line imports the createStore function from the Redux library and renames it as legacy_createStore for use in the code.
// It also imports the applyMiddleware function from Redux, which is used to apply middleware to the Redux store.
// import { thunk } from "redux-thunk";:

// This line attempts to import a named export thunk from the "redux-thunk" module. However, the correct named export from "redux-thunk" is usually thunkMiddleware or thunk instead of just thunk.
// import reducerThunk from "./Counter Reducer";:

// This line imports the reducer function reducerThunk from the "Counter Reducer" file. This reducer function is used to manage the state related to the timer in the Redux store.
// const store = createStore(reducerThunk, applyMiddleware(thunk));:

// This line creates a Redux store by calling the createStore function with the reducerThunk function as the reducer for the store.
// It also applies middleware to the store using the applyMiddleware function with the thunk middleware. However, there seems to be an issue in the code where thunk is imported incorrectly, as mentioned earlier.
// export default store;:

// This line exports the created Redux store as the default export from this module, making it available to be used in other parts of the application.
// In summary, this code sets up a Redux store with a reducer function and applies middleware (specifically Redux Thunk middleware, although there seems to be an issue with the import) to handle asynchronous actions in the Redux application.
