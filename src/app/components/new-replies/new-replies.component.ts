import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User } from 'src/app/model/model';



@Component({
  selector: 'app-new-replies',
  templateUrl: './new-replies.component.html',
  styleUrls: ['./new-replies.component.css']
})
export class NewRepliesComponent implements OnInit {
  @Output() onReply: EventEmitter<any> = new EventEmitter<any>();
  @Input() reply!: Comments | undefined;
  @Input() comment!: Comments;
  @Input() currentUser!: User;

  content: string = "";


  constructor() { }

  ngOnInit(): void {
    this.content = `@${this.comment.user.username}, `
  }

  addReply() {
    if (!this.content) {
      return;
    }
    this.onReply.emit({
      content: this.content,
      id: this.comment.id,
    });
    this.content = '';
  }




}
