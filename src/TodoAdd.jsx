import { useState } from "react";

const TodoAdd = ({ onAddTodo }) => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const addClick = () => {
    onAddTodo(todoData);
    setTodoData({
      title: "",
      description: "",
      status: "pending",
    });
  };

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <br />
      <input
        onChange={(e) => {
          setTodoData({ ...todoData, title: e.target.value });
        }}
        type="text"
        id="todoTitle"
        name="title"
        value={todoData.title}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <textarea
        onChange={(e) => {
          setTodoData({ ...todoData, description: e.target.value });
        }}
        name="description"
        id="todoDescription"
        cols="30"
        rows="5"
        value={todoData.description}
      ></textarea>
      <br />
      <label>Status:</label>
      <br />
      <input
        type="radio"
        name="status"
        value="pending"
        checked={todoData.status === "pending"}
        onChange={(e) => {
          setTodoData({ ...todoData, status: e.target.value });
        }}
      />
      <label htmlFor="pending">Pending</label>

      <input
        type="radio"
        name="status"
        value="completed"
        checked={todoData.status === "completed"}
        onChange={(e) => {
          setTodoData({ ...todoData, status: e.target.value });
        }}
      />
      <label htmlFor="completed">Completed</label>
      <br />
      <button onClick={addClick}>Add Todo</button>
    </div>
  );
};

export default TodoAdd;
