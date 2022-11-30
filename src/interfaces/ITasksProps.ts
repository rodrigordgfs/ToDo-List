import { ITask } from "./ITask";

export interface ITasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
}
