import { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../../storage/todo-context";
import Button from "./Button";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalCard = (props) => {
  const todoCtx = useContext(TodoContext);
  const todo = todoCtx.todoList.find((item) => item.id === props.id);

  const onClickHandler = () => {
    todoCtx.setShowTodoModal(false);
  };

  return (
    <div className={styles.modalCardBackground}>
      <div className={styles.modalCard}>
        <div className={styles["todo-info"]}>
          <h1>Task: {todo.todo}</h1>
          <h1>Date added: {todo.date}</h1>
        </div>
        <Button onClick={onClickHandler}>Close modal</Button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const containerElement = document.getElementById("modal-overlay");

  return createPortal(
    <Fragment>
      <Backdrop />
      <ModalCard id={props.id} todo={props.todo} date={props.date} />
    </Fragment>,
    containerElement
  );
};

export default Modal;
