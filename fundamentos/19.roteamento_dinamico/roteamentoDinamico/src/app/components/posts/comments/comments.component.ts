import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);

  @Input() set postId(value: string) {
    console.log('postId', value);
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe((params) => {
      console.log('userId', params);
    });
  }
}
