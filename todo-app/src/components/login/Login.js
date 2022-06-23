import Card from "../UI/Card";
import styles from "./Login.module.css";
import googleIcon from "../../images/googleIcon.png";
import { auth, provider } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;  
      })
      .catch((error) => {
        console.log("Error signing-in");
        console.log(error);
      });
  };

  return (
    <div className={styles["login-main-container"]}>
      <Card className={styles["login-inner-container"]}>
        <h1>Login:</h1>
        <div
          className={styles["google-login-container"]}
          onClick={signInWithGoogle}
        >
          <img src={googleIcon} alt="google icon" />
        </div>
      </Card>
    </div>
  );
};

export default Login;
