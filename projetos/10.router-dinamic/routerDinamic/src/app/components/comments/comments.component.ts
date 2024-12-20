import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICommentary } from '../../interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  private readonly _commentsService = inject(CommentsService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  commentsList$: Observable<ICommentary[]> = of([]);

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe((params) => {
      this.commentsList$ = this._commentsService.getCommentsByPost(
        params['idPost']
      );
    });
  }
}
