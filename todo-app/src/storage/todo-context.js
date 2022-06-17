import React, { useState } from "react";
import { getCurrentDate } from "../utils/getDate";

export const TodoContext = React.createContext({
  todoList: [], // {todo: "", date: "mm/dd/year", id: int}
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
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [totalCompletedTodos, setTotalCompletedTodos] = useState(0);
  const [todosInProgress, setTodosInProgress] = useState(0);

  const addTodo = async (todo) => {
    const newTodo = {
      todo: todo,
      date: getCurrentDate(),
      id: "id" + new Date().getTime(),
    };

    const response = await fetch(
      "https://todo-app-e79d2-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    );
    if (!response.ok) {
      console.log("Error sending data to server");
      return;
    }

    setTodoList((prevList) => [...prevList, newTodo]);
    setTodosInProgress((prevVal) => prevVal + 1);
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
