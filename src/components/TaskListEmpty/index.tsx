import styles from "./index.module.css";
import { ClipboardText } from "phosphor-react";

export function TaskListEmpty() {
  return (
    <div className={styles.taskListEmpty}>
      <ClipboardText className={styles.taskListEmpty__icon} size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
