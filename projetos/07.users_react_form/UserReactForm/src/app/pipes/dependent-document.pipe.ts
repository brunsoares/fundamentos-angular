import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dependentDocument',
})
export class DependentDocumentPipe implements PipeTransform {
  transform(document: number, hideNumber: boolean = false): string {
    let formattedCpf = document
      .toString()
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    if (hideNumber) {
      formattedCpf = `***.${formattedCpf.substring(4, 11)}-**`;
    }
    return formattedCpf;
  }
}
