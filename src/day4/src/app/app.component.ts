import { Component, OnInit } from '@angular/core';
import {TodoType} from './types/todo.type';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day4';
  todoList: TodoType[];

  
  constructor(private todoService: TodoService){
    this.todoList = [];
    
  }
  
  ngOnInit(){
    this.todoService.getTodos()
      .subscribe(todos => this.todoList = todos)
  }

  addTodo(todo:string){
    this.todoService.addTodo({title: todo, completed:false})
      .subscribe(todo => this.todoList.push(todo));
  }

}
