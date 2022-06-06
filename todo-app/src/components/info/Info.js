import { useContext } from "react";
import { TodoContext } from "../../storage/todo-context";
import Card from "../UI/Card";
import styles from "./Info.module.css";

const Info = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <div className={styles["info-container"]}>
      <Card>
        <div className={styles["info-container"]}>
          <h1>Info</h1>
          <h1>{todoCtx.todosInProgress}</h1>
          <h1>{todoCtx.totalCompletedTodos}</h1>
        </div>
      </Card>
    </div>
  );
};

export default Info;
