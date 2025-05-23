import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  // converting todo as an object
  const [todo, setTodo] = useState({
    id: "",
    name: "",
    done: false,
  });

  function handleSubmit(e) {
    // console.log("calling handleSubmit");
    //console.log("todo", todo);
    //console.log("todos", todos);

    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({
    id: "",
    name: "",
    done: false,
  });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({name:e.target.value, id: todo.length, done: false})}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
