import { Routes } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserSelectedComponent } from './components/user-selected/user-selected.component';
import { TodosComponent } from './components/todos/todos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostSelectedComponent } from './components/post-selected/post-selected.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: ListUserComponent,
  },
  {
    path: 'user-selected/:id',
    component: UserSelectedComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full',
      },
      {
        path: 'todos',
        component: TodosComponent,
      },
      {
        path: 'albums',
        component: AlbumsComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: 'post-selected/:idPost',
            component: PostSelectedComponent,
            children: [
              {
                path: 'comments',
                component: CommentsComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];
