import { Component, OnInit } from '@angular/core';
import {TodoType} from './types/todo.type';
import { CommentType } from './types/comment.type';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day3';
  todoList: TodoType[];
  commentsList: CommentType[]

  
  constructor(private commentsService: CommentsService){
    this.todoList = [];
    
  }
  
  ngOnInit(){
    this.commentsService.fetchComments()
    .then(data => {
      this.commentsList = data;
    })
  }
  addTodo(todo:string){
    const id = this.todoList.length + 1;
    this.todoList = [{id: id,text: todo, completed:false}, ...this.todoList];
  }

  completeTask(id:number){
    this.todoList = this.todoList.filter((val)=>{
      if(val.id === id){
         return false;
      }
      return true;
    })
  }

}
