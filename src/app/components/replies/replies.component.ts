import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, ScoresEvent, User } from 'src/app/model/model';


@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  @Input() reply!: Comments;
  @Input() comment!: Comments;
  @Input() currentUser!: User;
  @Output() onScoreReply: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onDeleteReply: EventEmitter<number> = new EventEmitter<number>();
  @Output() ontoggleReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyToreply: EventEmitter<any> = new EventEmitter<any>();

  showEdit: boolean = false;
  showReply = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggleReply() {
    this.showReply = !this.showReply;

  }

  toggleUpdate() {
    if (!this.reply.content) {
      return;
    }
    this.onReplyUpdate.emit({
      id: this.comment.id,
      content: this.reply.content,
    })
    this.toggleEdit()

  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  onDelete() {
    this.onDeleteReply.emit(this.reply?.id)
  }

  onReply() {
    this.ontoggleReply.emit(this.reply?.id);
  }

  changeReplyScore(type: string) {
    this.onScoreReply.emit({
      id: this.reply?.id ? this.reply.id : 0,
      type: type,
    })
  }

  onReplyToreplyHandler(data: any) {
    this.onReplyToreply.emit(data)
    this.toggleReply()
  }
}
