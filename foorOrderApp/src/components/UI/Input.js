import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );

  // {...props.input}
  // Say we receive an object {type: "text"} it will then → <input type="text" />
};

export default Input;
