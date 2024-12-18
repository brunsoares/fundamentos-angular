import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPost, PostsService } from '../../services/posts.services';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  @Input() set userId(value: string) {
    this.postList$ = this._postsService.getUserPosts(value);
  }

  postList$: Observable<IPost[]> = of([]);
  private readonly _postsService = inject(PostsService);
}
