// Importing redux from the redux package
const redux = require("redux");

// Reducer function
// Receives two parameters: old state + dispatch action
// and must return a new state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Creates a redux store
const store = redux.createStore(counterReducer);
console.log("Initial state");
console.log(store.getState());
console.log("--------------");

const counterSubscriber = () => {
  console.log(store.getState());
};

// counterSubscriber will be executed whenever a new action is dispatched
store.subscribe(counterSubscriber);

// Dispatches a increment action that will increment state.counter
store.dispatch({ type: "increment" });

// Dispatches a decrement action that will decrement state.counter
store.dispatch({ type: "decrement" });
