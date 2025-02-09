import { useState } from "react";
import ToDoContext from "./ToDoContext";

const ToDoState = ({ children }) => {
  const tasks = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(tasks);

  const changeTodos = (arr) => {
    setTodos((prev)=> [...prev,arr]);
  };

  return (
    <>
      <ToDoContext.Provider value={{ todos, changeTodos }}>
        {children}
      </ToDoContext.Provider>
    </>
  );
};

export default ToDoState;
