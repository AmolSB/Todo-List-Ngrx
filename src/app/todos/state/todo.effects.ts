import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from '../todo.service';
import * as todoActions from './todo.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Todo } from '../todo';
@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions, private todoService: TodoService) { }

  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(todoActions.TodoActionTypes.Load),
    mergeMap((action: todoActions.Load) => this.todoService.getTodos().pipe(
      map((todos: Todo[]) => (new todoActions.LoadSuccess(todos)))
    ))
  );

  @Effect()
  addTodo$ = this.actions$.pipe(
    ofType(todoActions.TodoActionTypes.AddTodo),
    map((action: todoActions.AddTodo) => action.payload),
    mergeMap((todo: Todo) => 
      this.todoService.addtodo(todo).pipe(
        map(addedTodo => (new todoActions.AddTodoSuccess(addedTodo)))
      )  
    )
  )
}