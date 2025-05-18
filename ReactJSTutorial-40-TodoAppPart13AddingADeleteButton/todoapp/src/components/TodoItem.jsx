import styles from "./TodoItem.module.css";
export default function TodoItem({ item, index }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={index}>
        {item}
        <span>
          <button className={styles.deleteButton}>x</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
