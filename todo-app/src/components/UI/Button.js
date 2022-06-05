import styles from "./Button.module.css";

const Button = (props) => {
  const className = `${styles["button-styles"]} ${props.className}`;
  return (
    <button className={className} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
