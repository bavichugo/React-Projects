import { useContext, useRef } from "react";
import { TodoContext } from "../../storage/todo-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const todoInputRef = useRef();
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const todoText = todoInputRef.current.value;

    // Todo text validation
    if (todoText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(todoText);
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
