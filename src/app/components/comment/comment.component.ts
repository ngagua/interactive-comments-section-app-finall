import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User, ScoresEvent } from '../../model/model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comments;
  @Input() currentUser!: User;
  @Output() onScore: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onScoreReply: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onDeleteComment: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteReply: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReply: EventEmitter<any> = new EventEmitter<any>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyToreply: EventEmitter<any> = new EventEmitter<any>();


  isReply: boolean = false;
  showEdit: boolean = false;
  reply!: Comments | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  toggleReply() {
    this.isReply = !this.isReply;

  }


  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  toggleUpdate() {
    if (!this.comment.content) {
      return;
    }
    this.onUpdate.emit({
      id: this.comment?.id,
      content: this.comment.content,
    })
    this.toggleEdit()
  }

  onDelete() {
    this.onDeleteComment.emit(this.comment?.id)
  }

  onDeleteReplyHandler(id: number) {
    this.onDeleteReply.emit(id);
  }

  changeScore(type: string) {
    this.onScore.emit({
      id: this.comment?.id ? this.comment.id : 0,
      type: type,
    })
  }


  onReplyhandler({ content, id }: any) {
    this.onReply.emit({
      content: content,
      id: id,
    })

    this.toggleReply();
  }

  onReplyUpdatehandler({ content, id }: any) {
    this.onReplyUpdate.emit({
      content: content,
      id: id,
    })

  }
  onScoreReplyHandler({ id, type }: ScoresEvent) {
    this.onScoreReply.emit({
      id: id,
      type: type,
    })
  }

  onReplyToreplyHandler(data: any) {
    this.onReplyToreply.emit(data)
  }

}
