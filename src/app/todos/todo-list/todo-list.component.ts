import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import * as todoActions from '../state/todo.actions';
import * as fromTodo from '../state/todo.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class AppTodoListComponent implements OnInit { 
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService, private store: Store<any>) { }
  
  ngOnInit() {
    this.store.dispatch(new todoActions.Load());

    this.todos$ = this.store.pipe(select(fromTodo.getTodos))
  }

}
