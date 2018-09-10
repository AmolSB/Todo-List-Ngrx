import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from './todo';
import { tap, catchError } from 'rxjs/operators'
@Injectable()
export class TodoService {
  private todosUrls = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosUrls)
  }

  addtodo(todo: Todo) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Todo>(this.todosUrls, todo, {headers: headers})
      .pipe(
        tap(data => console.log('create todo', + JSON.stringify(data)))
      )
  } 
}
