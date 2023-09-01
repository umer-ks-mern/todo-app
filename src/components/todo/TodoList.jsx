import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index + 1}
          title={todo.title}
          description={todo.description}
          status={todo.status}
        />
      ))}
    </div>
  );
};

export default TodoList;