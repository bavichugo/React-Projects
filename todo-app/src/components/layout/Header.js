import styles from "./Header.module.css";
import Button from "../UI/Button";

const Header = () => {
  const todosOnClickHandler = () => {};

  const infoOnClickHandler = () => {};

  return (
    <div className={styles["header-container"]}>
      <Button onClick={todosOnClickHandler}>Todos</Button>
      <Button onClick={infoOnClickHandler}>Info</Button>
    </div>
  );
};

export default Header;
