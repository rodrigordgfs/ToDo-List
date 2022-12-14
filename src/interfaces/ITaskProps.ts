export interface ITaskProps {
  id: string;
  description: string;
  done: boolean;
  onDeleteTask: (id: string) => void;
  onToogleDoneTask: (id: string) => void;
}
