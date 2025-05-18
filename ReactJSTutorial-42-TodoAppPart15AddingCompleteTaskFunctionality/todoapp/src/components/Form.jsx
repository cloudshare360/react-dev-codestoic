import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  // converting todo as an object
  const [todo, setTodo] = useState({
    id: 0,
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
      id: 0,
      name: "",
      done: false,
    });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => {
            console.log("todo.length", todos.length);
            setTodo({
              name: e.target.value,
              id: todos.length + 1,
              done: false,
            });
          }}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item"
        />

        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
      <div>
        <span>todo.length: {todos.length}</span>
        <span>new index {todos.length + 1}</span>
        <h2>Todo Item Details</h2>
        <ul>
          {Object.entries(todo).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
