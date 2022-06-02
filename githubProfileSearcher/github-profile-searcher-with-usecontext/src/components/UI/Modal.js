import { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import { ProjectContext } from "../../store/project-context";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalCard = ({ modalErrorMessage }) => {
  const projectCtx = useContext(ProjectContext);

  const onCloseHandler = () => {
    projectCtx.setShowErrorModal(false);
  };

  return (
    <div className={styles.modalCardBackground}>
      <div className={styles.modalCard}>
        <h1>{modalErrorMessage}</h1>
        <button onClick={onCloseHandler}>Close</button>
      </div>
    </div>
  );
};

const Modal = ({ modalErrorMessage }) => {
  const containerElement = document.getElementById("modal-overlay");
  return createPortal(
    <Fragment>
      <Backdrop />
      <ModalCard modalErrorMessage={modalErrorMessage} />
    </Fragment>,
    containerElement
  );
};

export default Modal;
