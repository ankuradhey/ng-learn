import { Injectable } from '@angular/core';
import { CommentsData } from '../data/comments.data';
import { CommentType } from '../types/comment.type';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments: CommentType[] = [];

  constructor() { }

  fetchComments():Promise<any>{
    return new Promise((resolve)=>{
      setTimeout(resolve, 100, CommentsData);
    })
  }
  
}
