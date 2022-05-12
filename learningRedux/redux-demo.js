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

console.log(store.getState());

const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
