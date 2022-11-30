import styles from "./index.module.css";
import { Trash } from "phosphor-react";
import { ITaskProps } from "../../interfaces/ITaskProps";
import { Check } from "phosphor-react";

export function Task({ id, description, done, onDeleteTask }: ITaskProps) {
  function toogleDeleteTask() {
    if (onDeleteTask) {
      onDeleteTask(id);
    }
  }

  return (
    <article className={styles.task}>
      {done ? (
        <div className={styles.task__done}>
          <div className={styles.task__done__circle}>
            <Check size={14} />
          </div>
        </div>
      ) : (
        <div className={styles.task__notDone}>
          <div className={styles.task__notDone__circle} />
        </div>
      )}
      <p
        className={
          done ? styles.task__descriptionDone : styles.task__description
        }
      >
        {description}
      </p>
      <div onClick={toogleDeleteTask} className={styles.task__delete}>
        <Trash size={20} />
      </div>
    </article>
  );
}
