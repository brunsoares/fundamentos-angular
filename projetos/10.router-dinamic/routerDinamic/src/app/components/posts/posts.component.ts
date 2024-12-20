import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPost } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  private readonly _postsService = inject(PostsService);
  private readonly _activatedRouter = inject(ActivatedRoute);
  postsList$: Observable<IPost[]> = of([]);

  ngOnInit() {
    this._activatedRouter.parent?.params.subscribe((params) => {
      this.postsList$ = this._postsService.getPostsByUser(params['id']);
    });
  }
}
