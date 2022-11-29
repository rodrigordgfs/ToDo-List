import { TaskCounter } from "../TaskCounter";
import { TaskListEmpty } from "../TaskListEmpty";
import styles from "./index.module.css";

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <TaskCounter />
      <TaskListEmpty />
    </div>
  );
}
