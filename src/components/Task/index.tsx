import styles from "./index.module.css";
import { Trash } from "phosphor-react";
import { TaskProps } from "../../interfaces/ITaskProps";
import { Check } from "phosphor-react";

export function Task({ description, done }: TaskProps) {
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
      <p className={styles.task__description}>{description}</p>
      <div className={styles.task__delete}>
        <Trash size={20} />
      </div>
    </article>
  );
}
