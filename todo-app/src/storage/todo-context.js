import React, { useState } from "react";

export const TodoContext = React.createContext({
  todoList: [],
  id: 0,
  setId: () => {},
  setTodoList: () => {},
  removeTodo: (id) => {},
});

const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);

  const removeTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== id)
    );
  };

  const todoContextValue = {
    todoList: todoList,
    id: id,
    setId: setId,
    setTodoList: setTodoList,
    removeTodo: removeTodo,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
