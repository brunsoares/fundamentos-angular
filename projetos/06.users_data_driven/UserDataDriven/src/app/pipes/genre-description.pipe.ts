import { Pipe, PipeTransform } from '@angular/core';
import { GenresServices } from '../services/genres.service';

@Pipe({
  name: 'genreDescription',
})
export class GenreDescriptionPipe implements PipeTransform {
  constructor(private readonly _genreService: GenresServices) {}

  transform(genreId: number): string {
    return this._genreService.getDescriptionById(genreId);
  }
}
