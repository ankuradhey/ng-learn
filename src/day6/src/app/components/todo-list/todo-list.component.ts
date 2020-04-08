import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoType } from '../../types/todo.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() markComplete = new EventEmitter();
  @Input() todos;

  constructor() { }

  completeTask(id:number){
    this.markComplete.emit(id);
  }

  ngOnInit(): void {
  }

}
