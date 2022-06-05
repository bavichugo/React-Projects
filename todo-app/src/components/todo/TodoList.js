import { useContext, Fragment } from "react";
import { TodoContext } from "../../storage/todo-context";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  const displayTodoListCondition = todoList.length > 0;

  const todos = todoList.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
    >{`${item.todo} ${item.date} ${item.id}`}</TodoItem>
  ));

  return (
    <Fragment>
      {displayTodoListCondition && (
        <Card>
          <ul className={styles["todo-list-style"]}>{todos}</ul>
        </Card>
      )}
    </Fragment>
  );
};

export default TodoList;
