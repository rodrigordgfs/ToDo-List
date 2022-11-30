import { ITaskCounterProps } from "../../interfaces/ITaskCounterProps";
import styles from "./index.module.css";

export function TaskCounter({ count, tasksDone }: ITaskCounterProps) {
  return (
    <div className={styles.taskList__counter}>
      <div className={styles.taskList__counter__created}>
        <p>Tarefas criadas</p>
        <span>{count}</span>
      </div>
      <div className={styles.taskList__counter__done}>
        <p>Concluídas</p>
        <span>
          {tasksDone} de {count}
        </span>
      </div>
    </div>
  );
}
