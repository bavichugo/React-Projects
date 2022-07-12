import './App.module.css';
import { useSelector, useDispatch } from "react-redux";
import { welcomeActions } from "./components/store/welcome-slice";

function App() {
  const firstTimePlaying = useSelector(state => state.welcome.firstTimePlaying);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(welcomeActions.toggleFirstTimePlaying());
  }

  return (
    <div className="App">
      {firstTimePlaying && <h1>Welcome</h1>}
      {firstTimePlaying && <button onClick={toggleHandler} >Toggle welcome</button>}
    </div>
  );
}

export default App;
