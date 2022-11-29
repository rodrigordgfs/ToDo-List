import styles from "./index.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input
        className={styles.newTask__input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.newTask__button} type="button">
        Adicionar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
