import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos }) {
  return (
    <div>
      <div>
        <h1>
          <u>List of todos</u>
        </h1>{" "}
      </div>
      <div className={styles.list}>
        {todos.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
        {console.log(todos)}
      </div>
    </div>
  );
}
