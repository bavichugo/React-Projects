import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
import styles from "./Counter.module.css";

const Counter = () => {
  const customIncrementValueRef = useRef();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterActions.increment({type: "increment"}));
  };

  const clearHandler = () => {
    dispatch(counterActions.clear());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const customIncrementHandler = (event) => {
    event.preventDefault();
    const value = customIncrementValueRef.current.value;
    dispatch(counterActions.increment({type: "custom", value: +value}));
    customIncrementValueRef.current.value = "";
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <div className={styles["counter-container"]}>
      {showCounter && <span className={styles["counter-counter"]}>{counter}</span>}
      <div>
        <button className={styles["counter-button"]} onClick={increaseHandler}>Increase</button>
        <button className={styles["counter-button"]} onClick={clearHandler}>Clear</button>
        <button className={styles["counter-button"]} onClick={decrementHandler}>Decrement</button>
      </div>

      <form className={styles["counter-form"]} onSubmit={customIncrementHandler}>
        <input className={styles["counter-input"]} type="number" placeholder="Custom number" ref={customIncrementValueRef}  />
        <button className={styles["counter-button"]}>Increment by</button>
      </form>
      <button className={styles["counter-button"]} onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  );
};

export default Counter;
