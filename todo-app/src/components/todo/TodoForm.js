import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form className={styles["form-style"]} onSubmit={submitHandler}>
        <input
          className={styles["input-form-style"]}
          type="text"
          placeholder="Add a todo"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default TodoForm;
