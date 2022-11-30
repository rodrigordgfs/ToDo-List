import { ITasksProps } from "../../interfaces/ITasksProps";
import { Task } from "../Task";
import { TaskCounter } from "../TaskCounter";
import { TaskListEmpty } from "../TaskListEmpty";
import styles from "./index.module.css";

export function TaskList({ tasks }: ITasksProps) {
  const tasksDone = tasks.filter((task) => task.done).length as number;

  return (
    <div className={styles.taskList}>
      <TaskCounter count={tasks.length} tasksDone={tasksDone} />
      {tasks.length === 0 ? (
        <TaskListEmpty />
      ) : (
        <>
          {tasks.map(({ id, description, done }) => {
            return <Task key={id} description={description} done={done} />;
          })}
        </>
      )}
    </div>
  );
}
