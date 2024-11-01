import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidators } from './invalid-text-validators';

@Component({
  selector: 'app-ex001',
  templateUrl: './ex001.component.html',
  styleUrl: './ex001.component.scss',
})
export class Ex001Component implements OnInit {
  name: FormControl = new FormControl('', [
    // Validators.required,
    // Validators.minLength(3),
    invalidTextValidators('invalido'),
  ]);
  // Validador customizado
  // name: FormControl = new FormControl('', {nonNullable: true, validators: Validators.required});
  // Atualizar o valor do input apenas no evento change
  // name: FormControl = new FormControl('', {nonNullable: true, validators: Validators.required, updateOn: 'change'});

  ngOnInit() {
    this.name.valueChanges.subscribe((value) => {
      console.log('Valor atualizado: ', value);
    });
  }

  showStatus() {
    if (this.name.valid) {
      alert('Nome válido');
    } else {
      alert('Nome inválido');
    }
  }

  changeValue() {
    this.name.setValue('Novo nome atualizado');
  }

  changeInput() {
    console.log('Valor alterado: ', this.name.value);
  }

  disableInput() {
    this.name.disable();
  }

  enableInput() {
    this.name.enable();
  }

  resetInput() {
    this.name.reset();
  }

  setValidatorsInput() {
    // Sobrescrevendo os validadores (sem o required)
    this.name.setValidators([Validators.minLength(3)]);
    this.name.updateValueAndValidity();
  }

  addValidatorsInput() {
    // Adicionando validadores (sem sobrescrever os existentes)
    this.name.addValidators([Validators.maxLength(10)]);
    this.name.updateValueAndValidity();
  }
}
