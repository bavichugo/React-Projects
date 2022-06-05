import { Fragment } from "react";
import Header from "./components/layout/Header";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <Fragment>
      <Header />
      <Todo />
    </Fragment>
  );
}

export default App;
