import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private todoList: Todo;
  private currentTodoList = new Subject<Array<Todo>>();
  readonly todo$: Observable<Array<Todo>> = this.currentTodoList.asObservable();
  constructor(private http: HttpClient) {}
  initialize$(): Observable<Array<Todo>> {
    const url = 'assets/json/tasks.json';
    return this.http.get(url).pipe(
      map((response: Todo[]) => {
        this.currentTodoList.next(response);
        return response;
      })
    );
  }
}
