import { useEffect } from "react";
import { welcomeActions } from "../store/welcome-slice";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import styles from "./Welcome.module.css";

const WelcomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
          dispatch(welcomeActions.toggleFirstTimePlaying());
        }, 5000);
        return () => clearTimeout(timer);
      },[]);

  return (
    <div className={styles["welcome-container"]} >
      <Card className={styles["card"]}>
        <span className={styles["welcome-text"]}>Trivia App</span>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
