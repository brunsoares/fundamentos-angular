import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/posts/comments/comments.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'posts/:userId',
        component: PostsComponent,
        children: [
          {
            path: ':postId',
            component: CommentsComponent,
          },
        ],
      },
    ],
  },
];
