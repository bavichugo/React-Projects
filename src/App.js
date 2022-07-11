import styles from './App.module.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className={styles["App"]}>
      <Counter />
    </div>
  );
}

export default App;
