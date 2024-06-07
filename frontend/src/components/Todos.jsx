export function Todos({ todos, onToggleComplete }) {
  return (
    <div>
      {todos.map(function (todo, index) {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                onToggleComplete(index);
              }}
            >
              {" "}
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
