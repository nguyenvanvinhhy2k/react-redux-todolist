export interface Todo {
  id: number;
  title: string;
  date: string;
  status: string;
  completed: boolean;
  onEdit?: false;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
  newDate: string;
}
