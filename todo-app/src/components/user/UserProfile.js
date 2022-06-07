import Card from "../UI/Card";
import styles from "./UserProfile.module.css";

const UserProfile = (props) => {
  const logoutHandler = () => {};

  return (
    <div className={styles["align-items"]}>
      <Card
        className={`${styles["align-items"]} ${styles["user-profile-card"]}`}
      >
        <h1>Username</h1>
        <button className={styles["logout-button"]} onClick={logoutHandler}>
          Logout
        </button>
      </Card>
    </div>
  );
};

export default UserProfile;
