import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TodoType } from '../types/todo.type';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = '/todos';
  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
   }

  getTodos(): Observable<TodoType[]>{
    return this.http.get<TodoType[]>(this.todoUrl)
    .pipe(
      catchError(this.handleError('getTodos', []))
    )
  }

  
  addTodo (todo: TodoType): Observable<TodoType> {
    return this.http.post<TodoType>(this.todoUrl, todo, httpOptions)
      .pipe(
        catchError(this.handleError('addTodo', todo))
      );
  }
}
