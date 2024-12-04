import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLower',
  standalone: true,
})
export class TextLowerPipe implements PipeTransform {
  transform(value: string): string {
    return value + ' - text-lower pipe works';
  }
}
