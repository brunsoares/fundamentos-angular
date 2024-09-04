import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.scss',
})
export class CompComponent implements OnInit {
  ngOnInit() {
    alert('Componente iniciado');
  }
}
