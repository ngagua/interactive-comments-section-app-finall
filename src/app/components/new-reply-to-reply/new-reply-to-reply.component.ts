import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User } from 'src/app/model/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-new-reply-to-reply',
  templateUrl: './new-reply-to-reply.component.html',
  styleUrls: ['./new-reply-to-reply.component.css']
})
export class NewReplyToReplyComponent implements OnInit {
  @Input() currentUser!: User;
  @Input() comment!: Comments;
  @Input() reply!: Comments;
  @Output() onReplyToReply: EventEmitter<any> = new EventEmitter<any>();


  content: string = "";
  constructor() { }

  ngOnInit() {
    this.content = `@${this.reply?.user?.username}, `;
  }


  addReplytoReply() {
    if (!this.content) {
      return;
    }
    this.onReplyToReply.emit({
      content: this.content,
      id: this.comment.id,
      replyId: this.reply.id
    });
    this.content = '';



  }
}
