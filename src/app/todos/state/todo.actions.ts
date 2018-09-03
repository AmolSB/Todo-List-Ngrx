import { Action } from "@ngrx/store";
import { Todo } from "../todo";

export enum TodoActionTypes {
  Load = '[Todos] Load',
  LoadSuccess = '[Todos] Load Success',
  LoadFail = '[Todos] Load Fail'
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
  | LoadFail;