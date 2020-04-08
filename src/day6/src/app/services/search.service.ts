import { Injectable } from '@angular/core';
import { TodoData } from '../data/todo';
import { TodoType } from '../types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private todoList: TodoType[] = [];

  constructor() { }

  fetchData(): TodoType[]{
    this.todoList = TodoData;
    return TodoData;
  }

  search(searchText: string): TodoType[]{
    return this.todoList.filter((todo) => {
      return (todo.title).toLowerCase().includes((searchText || '').toLowerCase());
   });
  }
}
