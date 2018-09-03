import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from './todo';
import { tap } from 'rxjs/operators'
@Injectable()
export class TodoService {
  private todosUrls = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosUrls)
  }
}
