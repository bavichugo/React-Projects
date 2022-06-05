import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return <li className={styles["todo-item-style"]}>{props.children}</li>;
};

export default TodoItem;
