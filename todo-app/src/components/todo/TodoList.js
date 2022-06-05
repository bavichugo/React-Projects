import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const DUMMY_TODOS = ["wash dishes", "clean house", "code", "workout"];

const TodoList = () => {
  const todos = DUMMY_TODOS.map((todo) => <TodoItem>todo</TodoItem>);
  return (
    <Card>
      <ul className={styles["todo-list-style"]}>{todos}</ul>
    </Card>
  );
};

export default TodoList;
