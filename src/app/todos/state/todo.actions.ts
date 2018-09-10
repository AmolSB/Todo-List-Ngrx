import { Action } from "@ngrx/store";
import { Todo } from "../todo";

export enum TodoActionTypes {
  AddTodo = '[Todos] Add Todo',
  AddTodoSuccess = '[Todo] Add Todo Success',
  AddTodoFail = '[Todo] Add Todo Fail',
  Load = '[Todos] Load',
  LoadSuccess = '[Todos] Load Success',
  LoadFail = '[Todos] Load Fail'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo

  constructor(public payload: Todo) { }
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.AddTodoSuccess

  constructor(public payload: Todo) { }
}

export class Load implements Action {
  readonly type = TodoActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = TodoActionTypes.LoadSuccess;

  constructor(public payload: Todo[]) { }
}

export class LoadFail implements Action {
  readonly type = TodoActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export type TodoActions = Load
  | LoadSuccess
  | LoadFail
  | AddTodoSuccess;