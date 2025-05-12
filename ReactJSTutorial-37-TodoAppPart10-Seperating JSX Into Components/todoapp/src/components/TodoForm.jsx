import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoForm() {
  const divStyleWithBorder = {
    border: "2px solid black",
    padding: "10px",
    margin: "10px 0",
  };

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(["play", "lunch", "homework"]);

  function handleSubmit(e) {
    // console.log("calling handleSubmit");
    //console.log("todo", todo);
    //console.log("todos", todos);

    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <div style={divStyleWithBorder}>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={todo}
          />
          <button type="submit">Add </button>
        </form>
      </div>
      <div style={divStyleWithBorder}>
        <div>
          <h2>
            <u>Todos list values are :-</u>
          </h2>
        </div>
        <div>
          <h2>
            <u>using todo component:</u>
          </h2>
        </div>
        <div>
          {todos.map((item, index) => (
            <TodoItem item={item} key={index} />
          ))}
          {console.log(todos)}
        </div>
      </div>
    </div>
  );
}
