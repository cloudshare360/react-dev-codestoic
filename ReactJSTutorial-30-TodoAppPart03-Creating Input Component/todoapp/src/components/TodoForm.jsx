import { useState } from "react";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const divStyleWithBorder = {
    border: "2px solid black",
    padding: "10px",
    margin: "10px 0",
  };
  return (
    <div>
      <div style={divStyleWithBorder}>
        <form>
          <input
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={todo}
          />
          <button type="submit">Add </button>
        </form>
      </div>
      <div style={divStyleWithBorder}>Todo Text Value is {todo}</div>
    </div>
  );
}
