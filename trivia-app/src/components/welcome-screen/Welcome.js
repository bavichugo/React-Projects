import { useState, useEffect } from "react";
import Card from "../UI/Card";
import styles from "./Welcome.module.css";

const WelcomeScreen = ({setFirstTimePlaying}) => {

    useEffect(() => {
      // Local storage check of whether to display first screen or not
      if (window.localStorage.getItem("firstTimeShowing") === "false") {
        setFirstTimePlaying(false);
        return;
      }

      window.localStorage.setItem("firstTimeShowing", "false");
        const timer = setTimeout(() => {
          setFirstTimePlaying(false);
        }, 1500);
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
