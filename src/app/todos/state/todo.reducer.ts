import { Todo } from '../todo'
import { TodoActions, TodoActionTypes } from './todo.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TodoState {
  currentTodo: Todo;
  todos: Todo[];
  error: ''
}

const initialState: TodoState = {
  currentTodo: null,
  todos: [],
  error: ''
}

const getTodoFeatureState = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(
  getTodoFeatureState,
  state => state.todos
)

export function reducer(state: TodoState = initialState, action: TodoActions) {
  
  switch(action.type) {

    case TodoActionTypes.LoadSuccess:
      return {
        ...state,
        todos: action.payload,
        error: ''
      }

    case TodoActionTypes.LoadFail:
      return {
        ...state,
        todos: [],
        error: action.payload
      }
    default:
      return state
  }

}