import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";
import { ITask } from "./interfaces/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddNewTask(task: ITask) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function handleDeleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onNewTask={handleAddNewTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
