import { useContext } from "react";
import { TodoContext } from "../../storage/todo-context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";

const Todo = () => {
  return (
    <div className={styles["todo-container"]}>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
