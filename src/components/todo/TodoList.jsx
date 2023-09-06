import Todo from "./Todo";

const TodoList = ({ todos, deleteOne, markComplete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index + 1}
          title={todo.title}
          description={todo.description}
          status={todo.status}
          deleteOne={deleteOne}
          markComplete={markComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;