import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoType } from '../../types/todo.type';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  sortOrder: string = 'asc';

  @Output() markComplete = new EventEmitter();
  @Input() todos;

  constructor(private todoService: TodolistService) { }

  ngOnInit(): void {
      this.todos = this.todoService.findAll();
  }

  onSelectionChange(value): void {
    this.sortOrder = value;
  }

}
