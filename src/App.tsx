import styles from "./App.module.css";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
