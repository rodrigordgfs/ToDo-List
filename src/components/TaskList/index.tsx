import { ITasksProps } from "../../interfaces/ITasksProps";
import { Task } from "../Task";
import { TaskCounter } from "../TaskCounter";
import { TaskListEmpty } from "../TaskListEmpty";
import styles from "./index.module.css";

export function TaskList({
  tasks,
  onDeleteTask,
  onToogleDoneTask,
}: ITasksProps) {
  const tasksDone = tasks.filter((task) => task.done).length as number;

  function handleDeleteTask(id: string) {
    if (onDeleteTask) {
      onDeleteTask(id);
    }
  }

  function toogleDoneTask(id: string) {
    if (onToogleDoneTask) {
      onToogleDoneTask(id);
    }
  }

  return (
    <div className={styles.taskList}>
      <TaskCounter count={tasks.length} tasksDone={tasksDone} />
      {tasks.length === 0 ? (
        <TaskListEmpty />
      ) : (
        <>
          {tasks.map(({ id, description, done }) => {
            return (
              <Task
                key={id}
                id={id}
                description={description}
                done={done}
                onDeleteTask={handleDeleteTask}
                onToogleDoneTask={toogleDoneTask}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
