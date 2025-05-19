import styles from "./TodoItem.module.css";
export default function TodoItem({ item, index, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item:", item);
    //todos.filter((todo) => todo !== item);
    setTodos(todos.filter((todo) => todo.id !== item.id));
    console.log("Updated todos:", todos);
  }

  function handleClick(itemName)
  {
    console.log("Item click:", itemName);
    setTodos(todos.map((todo)=> todo.name === itemName ? {...todo, done: !todo.done}: todo));
    console.log("todos", todos);
  }

  const className = item.done?  styles.completed : ""

  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={index}>
       <span  className={className} onClick={()=> handleClick(item.name) }> id: {item.id} ; name: {item.name}; isDone: {(item.done) ? "true": "false"}</span>
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
