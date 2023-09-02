import { useEffect, useState } from "react";
import TodoAdd from "../../components/todo/TodoAdd";
import TodoList from "../../components/todo/TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (newTodo) => {
    // Update the state with the newTodo
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    
    // Save the updatedTodos to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  
  const deleteHistory = () => {
    localStorage.setItem("todos", JSON.stringify([]));
    setTodos([]);
    alert("History Cleared!");
  };

  return (
    <>
      <button onClick={deleteHistory}>Delete History</button>
      <TodoAdd onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoWrapper;
