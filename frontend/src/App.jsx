import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  //wrong way
  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });
  //this causes infinite requests to /todos because component rerenders because of updation of setTodos thus setting a infinite cycle
  // useEffect is the solution for this
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, [todos]);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
