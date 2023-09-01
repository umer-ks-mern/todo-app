import { useState } from "react";
import TodoAdd from "../../components/todo/TodoAdd";
import TodoList from "../../components/todo/TodoList";

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
