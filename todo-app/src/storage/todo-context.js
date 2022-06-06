import React, { useState } from "react";

export const TodoContext = React.createContext({
  todoList: [], // {todo: "", date: "mm/dd/year", id: int}
  id: 0,
  showTodoModal: false,
  totalCompletedTodos: 0,
  todosInProgress: 0,
  setId: () => {},
  setTodoList: () => {},
  removeTodo: (id) => {},
  completeTodo: (id) => {},
  setShowTodoModal: () => {},
});

const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [totalCompletedTodos, setTotalCompletedTodos] = useState(0);
  const [todosInProgress, setTodosInProgress] = useState(0);

  const removeTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== id)
    );
    setTodosInProgress((prevVal) => prevVal - 1);
  };

  const completeTodo = (id) => {
    removeTodo(id);
    setTotalCompletedTodos((prevVal) => prevVal + 1);
  };

  const todoContextValue = {
    todoList: todoList,
    id: id,
    showTodoModal: showTodoModal,
    totalCompletedTodos: totalCompletedTodos,
    todosInProgress: todosInProgress,
    setId: setId,
    setTodoList: setTodoList,
    removeTodo: removeTodo,
    completeTodo: completeTodo,
    setShowTodoModal: setShowTodoModal,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
