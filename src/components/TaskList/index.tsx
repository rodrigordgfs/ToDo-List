import { TaskCounter } from "../TaskCounter";
import styles from "./index.module.css";

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <TaskCounter />
    </div>
  );
}
