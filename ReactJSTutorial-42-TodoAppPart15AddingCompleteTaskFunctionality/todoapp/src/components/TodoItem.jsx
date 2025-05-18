import styles from "./TodoItem.module.css";
export default function TodoItem({ item, index, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item:", item);
    //todos.filter((todo) => todo !== item);
    setTodos(todos.filter((todo) => todo.id !== item.id));
    console.log("Updated todos:", todos);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={index}>
        id:  {item.id} ; name: {item.name}; isDone: {item.done}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
