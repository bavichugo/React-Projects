import Card from "../UI/Card";
import styles from "./Login.module.css";
import googleIcon from "../../images/googleIcon.png";

const Login = () => {
  return (
    <div className={styles["login-main-container"]}>
      <Card className={styles["login-inner-container"]}>
        <h1>Login:</h1>
        <div className={styles["google-login-container"]}><img src={googleIcon} alt="google icon" /></div>
      </Card>
    </div>
  );
};

export default Login;
