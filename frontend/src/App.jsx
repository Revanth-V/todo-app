import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  /* By moving the fetch call inside the useEffect hook and providing an empty dependency array, the fetch operation will only execute once, when the component is first rendered. This prevents the infinite loop caused by the state update (setTodos) triggering a re-render, which would otherwise cause the fetch to be called again and again. */
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((error) => {
          console.log("Error fetching todos:", error);
        });
    }, 3000);
  }, []);

  const toggleComplete = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index].completed = !newTodos[index].completed;
      return newTodos;
    });
  };

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} onToggleComplete={toggleComplete}></Todos>
    </div>
  );
}

export default App;
