import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personText',
})
export class PersonTextPipe implements PipeTransform {
  transform(text: string, maxLength: number): string {
    let formatedText: string = text;
    if (text.length > maxLength) {
      formatedText = formatedText.substring(0, maxLength) + '...';
    }
    return formatedText;
  }
}
