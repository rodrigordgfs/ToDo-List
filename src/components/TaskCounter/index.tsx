import styles from "./index.module.css";

export function TaskCounter() {
  return (
    <div className={styles.taskList__counter}>
      <div className={styles.taskList__counter__created}>
        <p>Tarefas criadas</p>
        <span>5</span>
      </div>
      <div className={styles.taskList__counter__done}>
        <p>Concluídas</p>
        <span>1 de 5</span>
      </div>
    </div>
  );
}
