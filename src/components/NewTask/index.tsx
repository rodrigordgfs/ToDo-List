import styles from "./index.module.css";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { INewTaskProps } from "../../interfaces/INewTaskProps";
import { FormEvent, useState } from "react";

export function NewTask({ onNewTask }: INewTaskProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault();
    onNewTask({
      id: uuidv4(),
      description: task,
      done: false,
    });
    setTask("");
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.newTask}>
      <input
        className={styles.newTask__input}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.newTask__button} type="submit">
        Adicionar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
