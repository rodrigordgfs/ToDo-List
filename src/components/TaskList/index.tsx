import { Task } from "../Task";
import { TaskCounter } from "../TaskCounter";
import { TaskListEmpty } from "../TaskListEmpty";
import styles from "./index.module.css";

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <TaskCounter />
      {/* <TaskListEmpty /> */}
      <Task
        description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        done={true}
      />
    </div>
  );
}
