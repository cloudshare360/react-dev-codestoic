import TodoItem from "./TodoItem";

import styles from "./TodoList.modules.css?inline";

export default function TodoList({ todos }) {
  return (
    <div>
      <div className={styles.list}>
        {todos.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
        {console.log(todos)}
      </div>
    </div>
  );
}
