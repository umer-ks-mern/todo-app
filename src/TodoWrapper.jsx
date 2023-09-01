import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoAdd onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoWrapper;
