export const ADD_TODO = "ADD_TODO";
export type ADD_TODO = typeof ADD_TODO;

let nextTodoId = 0;

export interface IAddTodoAction {
  id: number;
  text: string;
  type: ADD_TODO;
}

export type TodoAction = IAddTodoAction;

export const addTodo = (text: string): IAddTodoAction => ({
  id: nextTodoId++,
  text,
  type: ADD_TODO
});

export class Todo {
  public completed: boolean | undefined;
  public id: number | undefined;
  public text: string | undefined;
}
