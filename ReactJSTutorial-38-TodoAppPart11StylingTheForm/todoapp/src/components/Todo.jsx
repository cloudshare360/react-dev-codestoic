import { useState } from "react";
import Form from './Form'
import  TodoList from "./TodoList";


export default function Todo() {

  const [todos, setTodos] = useState(["play", "lunch", "homework"]);

  const divStyleWithBorder = {
    border: "2px solid black",
    padding: "10px",
    margin: "10px 0",
  };

  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}
