import { useContext, useRef } from "react";
import { TodoContext } from "../../storage/todo-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TodoForm.module.css";
import { getCurrentDate } from "../../utils/getDate";

const TodoForm = () => {
  const todoInputRef = useRef();
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const currentDate = getCurrentDate();
    const newTodo = {
      todo: todoInputRef.current.value,
      date: currentDate,
      id: todoCtx.id,
    };
    todoCtx.setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    todoCtx.setId((prevId) => prevId + 1);
    todoInputRef.current.value = "";
  };

  return (
    <Card>
      <form className={styles["form-style"]} onSubmit={submitHandler}>
        <input
          className={styles["input-form-style"]}
          type="text"
          placeholder="Add a todo"
          ref={todoInputRef}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default TodoForm;
