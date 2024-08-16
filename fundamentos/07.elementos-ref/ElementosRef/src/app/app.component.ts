import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('divRef') divRef!: ElementRef<HTMLDivElement>;

  // Por meio de instância podemos pegar qualquer elemento do template
  constructor(private readonly _elRef: ElementRef) {}

  // Atribuindo valores de estilo para o ElementRef
  ngAfterViewInit() {
    this.divRef.nativeElement.style.backgroundColor = 'purple';
    this.divRef.nativeElement.textContent =
      'Conteúdo da div Referenciado pelo TS';
    this.divRef.nativeElement.classList.add('class-add');
  }

  createDiv() {
    const newDiv = document.createElement('div');

    newDiv.textContent = 'Nova div criada a partir do botão pelo REF';
    newDiv.style.backgroundColor = 'green';
    newDiv.classList.add('class-add');

    this.divRef.nativeElement.appendChild(newDiv); // Envia a div para o template html
  }
}
