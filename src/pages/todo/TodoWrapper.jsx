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

  //this deleteOne Function has a bug - it will delete the first element with the given title
  //if we have multiple todos with same title the first one will be deleted
  //to fix we can add id property OR when using DB we will not need this
  //this is just a note to identify the bug for local storage execution
  
  const deleteOne = (todoToBeDeleted) => {
    const indexToDelete = todos.findIndex(
      (todo) => todo.title === todoToBeDeleted.title
    );
    todos.splice(indexToDelete, 1);
    const updatedTodos = [...todos];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const markComplete = (todoToBeCompleted) => {
    const indexToUpdate = todos.findIndex(
      (todo) => todo.title === todoToBeCompleted.title
    );

    if (indexToUpdate !== -1) {
      todos[indexToUpdate].status = "completed";
      const updatedTodos = [...todos];

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      console.log(updatedTodos);
      setTodos(updatedTodos);
    }

    // // find the todo and update
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
    // setTodos(updatedTodos);
    // alert("Updated");
  };

  return (
    <>
      <button onClick={deleteHistory}>Delete History</button>
      <TodoAdd onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteOne={deleteOne}
        markComplete={markComplete}
      />
    </>
  );
};

export default TodoWrapper;
