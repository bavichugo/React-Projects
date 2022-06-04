import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
};

export default LoadingSpinner;
