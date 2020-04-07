import { Component, OnInit } from '@angular/core';
import {TodoType} from './types/todo.type';

import {SearchService} from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day5';
  todoList: TodoType[];

  
  constructor(private searchService: SearchService){
    this.todoList = this.searchService.fetchData();
    
  }
  
  ngOnInit(){
   
  }

  addTodo(todo:string){
    const id = this.todoList.length + 1;
    this.todoList = [{id: id,title: todo, completed:false}, ...this.todoList];
  }

  onSearch(results:TodoType[]){
    this.todoList = results;
  }
}
