import React, { useState } from "react";

export const TodoContext = React.createContext({
  todoList: [], // {todo: "", date: "mm/dd/year", id: int}
  idCounter: 0, // Holds the id of the next todo
  showTodoModal: false,
  totalCompletedTodos: 0,
  todosInProgress: 0,
  setTodoList: (newTodoList) => {},
  addTodo: (todo, date) => {},
  removeTodo: (id) => {},
  completeTodo: (id) => {},
  setShowTodoModal: () => {},
});

const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [totalCompletedTodos, setTotalCompletedTodos] = useState(0);
  const [todosInProgress, setTodosInProgress] = useState(0);

  const addTodo = (todo, date) => {
    const newTodo = {
      todo: todo,
      date: date,
      id: idCounter,
    };

    setTodoList((prevList) => [...prevList, newTodo]);
    setTodosInProgress((prevVal) => prevVal + 1);
    setIdCounter((prevVal) => prevVal + 1);
  };

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
    idCounter: idCounter,
    showTodoModal: showTodoModal,
    totalCompletedTodos: totalCompletedTodos,
    todosInProgress: todosInProgress,
    setTodoList: setTodoList,
    addTodo: addTodo,
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
