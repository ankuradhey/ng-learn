import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoType } from '../types/todo.type';
import { TodoData } from '../data/todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor() { }

  findAll(): Observable<TodoType[]> {
      return of(TodoData);
  }
}
