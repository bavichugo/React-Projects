import styles from "./Header.module.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const onClickHandler = (destination) => {
    navigate(`${destination}`, { replace: true });
  };

  return (
    <div className={styles["header-container"]}>
      <Button>Login</Button>
      <Button onClick={() => onClickHandler("todos")}>Todos</Button>
      <Button onClick={() => onClickHandler("info")}>Info</Button>
      <Button onClick={() => onClickHandler("user")}>User</Button>
    </div>
  );
};

export default Header;
