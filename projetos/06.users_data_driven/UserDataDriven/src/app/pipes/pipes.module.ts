import { NgModule } from '@angular/core';
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';
import { MusicFavoriteConvertPipe } from './music-favorite-convert.pipe';

@NgModule({
  declarations: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
    MusicFavoriteConvertPipe,
  ],
  exports: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
    MusicFavoriteConvertPipe,
  ],
})
export class PipesModule {}
