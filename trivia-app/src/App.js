import { useState } from "react";
import styles from './App.module.css';
import CategorySelector from "./components/category-form/CategorySelector";
import WelcomeScreen from './components/welcome-screen/Welcome';

function App() {
  const [firstTimePlaying, setFirstTimePlaying] = useState(true);

  return (
    <div className={styles["app"]}>
      {firstTimePlaying && <WelcomeScreen setFirstTimePlaying={setFirstTimePlaying} />}
      {!firstTimePlaying && <CategorySelector />}
    </div>
  );
}

export default App;
