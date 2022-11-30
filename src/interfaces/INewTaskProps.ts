import { ITask } from "./ITask";

export interface INewTaskProps {
  onNewTask: (task: ITask) => void;
}
