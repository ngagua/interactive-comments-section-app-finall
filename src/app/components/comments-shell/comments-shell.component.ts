import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Comments, User, ScoresEvent } from '../../model/model';


@Component({
  selector: 'app-comments-shell',
  templateUrl: './comments-shell.component.html',
  styleUrls: ['./comments-shell.component.css']
})
export class CommentsshellComponent implements OnInit {
  @Input() comments!: Comments[];
  @Input() comment!: Comments;

  commentslist: Comments[] = []
  currentUser!: User;


  ngOnInit(): void {
    this.userService.getusers().then(
      data => {
        this.commentslist = data.comments;
        this.currentUser = data.currentUser;

      });


  }

  constructor(private userService: UserService) { }


  onScoreHandler({ id, type }: ScoresEvent) {
    this.commentslist.forEach(item => {
      if (item.id == id) {
        if (type == "minus") {
          --item.score;
          if (item.score < 0) {
            item.score = 0;
          }
        } else {
          ++item.score;
        }
      }
    })
  }

  onScoreReplyHandler({ id, type }: ScoresEvent) {
    this.commentslist.forEach(item => {
      item.replies.forEach(reply => {
        if ((reply.id == id)) {
          if (type == "minus") {
            --reply.score;
            if (reply.score < 0) {
              reply.score = 0;
            }
          } else {
            ++reply.score;
          }

        }
      })
    })


  }

  generateMaxId(): number {
    let id = 1;
    this.commentslist.forEach((mainComment) => {
      if (mainComment.id) {
        if (mainComment?.id > id)
          id = mainComment.id;
      }
      mainComment.replies.forEach((item) => {
        if (item.id) {
          if (item.id > id)
            id = item.id;
        }
      });
    });

    return ++id;
  }

  onCommenthandler(content: string) {
    const newComment: Comments = {
      id: this.generateMaxId(),
      content: content,
      createdAt: JSON.stringify(new Date(Date.now())),
      score: 0,
      user: this.currentUser,
      replies: []
    }

    this.commentslist.push(newComment);

  }

  deleteCommenthandler(id: number) {
    this.commentslist = this.commentslist.filter((comment) => comment.id !== id);
  }

  deleteReplyhandler(id: number) {
    this.commentslist.forEach(item => {
      item.replies = item.replies.filter(reply => {
        return reply.id !== id
      })
    })
  }


  onReplyhandler({ content, id }: any) {
    const replito = this.commentslist.find(comment => comment.id == id)

    const newReply: Comments = {
      id: this.generateMaxId(),
      content: content.split(" ").splice(1).join(" "),
      createdAt: JSON.stringify(new Date(Date.now())),
      score: 0,
      user: this.currentUser,
      replyingTo: replito?.user.username,
      replies: []
    }


    this.commentslist.forEach(comment => {
      if (comment.id == id) {

        comment.replies.push(newReply)
      }

    })

  }

  onUpdateHandler({ id, content }: any) {
    this.commentslist.forEach(comment => {
      if (comment.id == id) {
        comment.content = content
      }

    })
  }

  onReplyUpdatehandler({ id, content }: any) {
    this.commentslist.forEach(comment => {
      if (comment.id == id) {
        comment.replies[content] = content
      }

    })
  }


  onReplyToreplyHandler({ id, content, replyId }: any) {
    const mainComment = this.commentslist.find(comment => comment.id == id)
    const replyto = mainComment?.replies.find(reply => reply.id == replyId)

    const newReply: Comments = {
      id: this.generateMaxId(),
      content: content.split(" ").splice(1).join(" "),
      createdAt: JSON.stringify(new Date(Date.now())),
      score: 0,
      user: this.currentUser,
      replyingTo: replyto?.user.username,
      replies: []
    }


    this.commentslist.forEach(comment => {
      if (comment.id == id) {

        comment.replies.push(newReply)
      }

    })
  }


}
