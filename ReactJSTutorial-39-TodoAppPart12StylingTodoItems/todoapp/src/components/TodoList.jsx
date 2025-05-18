import TodoItem from './TodoItem'
import styles from './todolist.modules.css'

export default function TodoList({todos}) {
  
    return (
        <div style={styles.divStyleWithBorder}>
            <div>
                <h2>
                    <u>Todos list values are :-</u>
                </h2>
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