import { useContext } from "react";
import { TodoContext } from "../../storage/todo-context";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const todoCtx = useContext(TodoContext);

  const onClickHandler = () => {
    todoCtx.removeTodo(props.id);
  };

  return (
    <li className={styles["todo-item-style"]} onClick={onClickHandler}>
      {props.children}
    </li>
  );
};

export default TodoItem;
