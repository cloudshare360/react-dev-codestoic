import styles from "./TodoItem.modules.css?inline";
export default function TodoItem({ item, index }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={index}>
        {item}
      </div>
    </div>
  );
}
