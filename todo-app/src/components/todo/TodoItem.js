import { useContext, useState, Fragment } from "react";
import { TodoContext } from "../../storage/todo-context";
import styles from "./TodoItem.module.css";
import Modal from "../UI/Modal";

const TodoItem = (props) => {
  const { removeTodo, completeTodo, setShowTodoModal, showTodoModal } =
    useContext(TodoContext);
  const [displayCloseButton, setDisplayCloseButton] = useState(false);

  const onClickHandler = () => {
    // Open modal with info
    setShowTodoModal(true);
  };

  return (
    <Fragment>
      {showTodoModal && <Modal id={props.id} />}
      <div
        className={styles["todo-item-container"]}
        onMouseOver={() => setDisplayCloseButton(true)}
        onMouseOut={() => setDisplayCloseButton(false)}
      >
        <li
          className={styles["todo-item-inner-container"]}
          onClick={onClickHandler}
        >
          {props.children}
        </li>
        {displayCloseButton && (
          <Fragment>
            <button
              className={styles["complete-button"]}
              onClick={() => completeTodo(props.id)}
            >
              Complete
            </button>
            <button
              className={styles["remove-button"]}
              onClick={() => removeTodo(props.id)}
            >
              Remove
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default TodoItem;
