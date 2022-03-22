import { Component } from '@angular/core';
import { UserService } from './user.service';
import { CommentService } from './comments.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentService, UserService]
})
export class AppComponent {
  title = 'interactive-comments-section-app';
  ngOnInit(): void {};


}
