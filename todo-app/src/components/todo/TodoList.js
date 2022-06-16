import { useEffect, useContext, Fragment } from "react";
import { TodoContext } from "../../storage/todo-context";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  // Initial 
  useEffect(() => {
    const initialDataRequest =  async () => {
      const response = await fetch("https://todo-app-e79d2-default-rtdb.firebaseio.com/todos.json");
      if (!response.ok || response.status === 404) {
        console.log("Error reaching the server");
        return;
      }

      const data = await response.json();
      todoCtx.setTodoList(Object.values(data));

    }
    initialDataRequest();
  }, []);

  const displayTodoListCondition = todoCtx.todoList.length > 0;

  const todos = todoCtx.todoList.map((item) => (
    <TodoItem key={item.id} id={item.id}>{`${item.todo}`}</TodoItem>
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
