const Todo = ({ title, description, status, deleteOne, markComplete }) => {
  const currentTodo = {
    title: title,
    description: description,
    status: status,
  };
  const handleTodoButtonClick = () => {
    status === "pending" ? markComplete(currentTodo) : deleteOne(currentTodo);
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        Status: <strong>{status}</strong>
      </p>
      <button onClick={handleTodoButtonClick}>
        {status === "pending" ? "Complete" : "Delete"}
      </button>
    </div>
  );
};

export default Todo;
