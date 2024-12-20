import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAlbum } from '../../interfaces/albums.interface';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent implements OnInit {
  private readonly _albumsService = inject(AlbumsService);
  private readonly _activateRouter = inject(ActivatedRoute);
  albumsList$: Observable<IAlbum[]> = of([]);

  ngOnInit() {
    this._activateRouter.parent?.params.subscribe((params) => {
      this.albumsList$ = this._albumsService.getAlbumsByUser(params['id']);
    });
  }
}
