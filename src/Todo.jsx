const Todo = ({ title, description, status }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: <strong>{status}</strong></p>
    </div>
  );
};

export default Todo;
