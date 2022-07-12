import styles from './App.module.css';
import { useSelector } from "react-redux";
import WelcomeScreen from './components/welcome-screen/Welcome';

function App() {
  const firstTimePlaying = useSelector(state => state.welcome.firstTimePlaying);

  return (
    <div className={styles["app"]}>
      {firstTimePlaying && <WelcomeScreen />}
    </div>
  );
}

export default App;
