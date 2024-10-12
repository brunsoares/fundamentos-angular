import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'musicFavoriteConvert',
})
export class MusicFavoriteConvertPipe implements PipeTransform {
  transform(isFavorite: boolean): string {
    return isFavorite ? 'Sim' : 'Não';
  }
}
