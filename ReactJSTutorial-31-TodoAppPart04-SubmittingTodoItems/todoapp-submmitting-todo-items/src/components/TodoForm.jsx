import { useState } from "react";

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
      <div style={divStyleWithBorder}>Todo Text Value is </div>
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
      {console.log(todos)}
    </div>
  );
}
