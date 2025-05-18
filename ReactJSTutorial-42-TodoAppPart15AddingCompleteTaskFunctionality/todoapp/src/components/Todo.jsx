import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([
    { name: "play", id: 1, done: false },
    { name: "lunch", id: 2, done: false },
    { name: "homework", id: 3, done: false }
  ]
  );

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
