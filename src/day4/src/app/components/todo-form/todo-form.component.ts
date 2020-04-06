import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() addTodoEmitter = new EventEmitter();

  public todoText: string = '';

  public onInput(event){
    this.todoText = event.target.value;
  }

  public addTodo(){
    this.addTodoEmitter.emit(this.todoText);
    this.todoText = '';
  } 

  ngOnInit(): void {
  }

}
