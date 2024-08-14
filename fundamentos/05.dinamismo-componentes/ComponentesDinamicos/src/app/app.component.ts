import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('inputTemplateViewCH') inputVC!: ElementRef<HTMLInputElement>;
  @ViewChild('divTextAlterar') divTextAlt!: ElementRef<HTMLDivElement>;
  @ViewChild('compFilho') compFilho!: FilhoComponent;
  @ViewChild('inputStatic', { static: true })
  inputStatic!: ElementRef<HTMLInputElement>;

  constructor(private _cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.inputStatic.nativeElement.focus();
  }

  changeDetection() {
    this._cdRef.detectChanges();
  }

  updateInputTextVC() {
    this.inputVC.nativeElement.value = 'Texto atualizado pelo View Child';
  }

  setFocus() {
    this.inputVC.nativeElement.focus();
  }

  updateTextDiv() {
    this.divTextAlt.nativeElement.textContent =
      'Conteúdo alterado dinâmicamente!!!';
  }

  actionFilho() {
    this.compFilho.sayHi();
  }
}
