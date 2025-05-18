import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    // console.log("calling handleSubmit");
    //console.log("todo", todo);
    //console.log("todos", todos);

    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={style.todoForm} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Enter Todo Item"
        />
        <button className={style.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
