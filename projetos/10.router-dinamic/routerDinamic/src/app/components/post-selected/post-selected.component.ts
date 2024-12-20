import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { IPost } from '../../interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-selected',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './post-selected.component.html',
  styleUrl: './post-selected.component.scss',
})
export class PostSelectedComponent implements OnInit {
  private readonly _postService = inject(PostsService);
  private readonly _activatedRouter = inject(ActivatedRoute);
  postSelected: IPost = {} as IPost;

  ngOnInit() {
    this._activatedRouter.params.subscribe((params) => {
      this._postService.getPostById(params['idPost']).subscribe((post) => {
        this.postSelected = post;
      });
    });
  }
}
