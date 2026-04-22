export interface CreateTodo {
  todo: string;
  description: string;
  status?: boolean;
}
export interface Todo {
  _id: string;
  todo: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface TodoResponse {
  message: string;
  todos: Todo[];
}
