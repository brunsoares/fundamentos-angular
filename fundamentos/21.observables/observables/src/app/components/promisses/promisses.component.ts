import { Component, inject, OnInit } from '@angular/core';
import { PromissesService } from './promisses.service';

@Component({
  selector: 'app-promisses',
  standalone: true,
  imports: [],
  templateUrl: './promisses.component.html',
  styleUrl: './promisses.component.scss',
})
export class PromissesComponent implements OnInit {
  private readonly _promissesService = inject(PromissesService);

  ngOnInit(): void {
    this._promissesService
      .promiseSimple()
      .then((result) => {
        console.log(result);
      })
      .finally(() => {
        console.log('Finally resolve chamado');
      });

    this._promissesService
      .promiseReject()
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Finally reject chamado');
      });
  }

  promiseAll() {
    Promise.all([
      this._promissesService.getUsers(),
      this._promissesService.getTodos(),
    ])
      .then((result) => {
        console.log('Then promise all: ', result);
      })
      .catch(() => {
        console.log('Erro na promise');
      })
      .finally(() => {
        console.log('Finally promiseAll chamado');
      });
  }

  promiseRace() {
    Promise.race([
      this._promissesService.getUsers(),
      this._promissesService.getTodos(),
    ])
      .then((result) => {
        console.log('Then promise race', result);
      })
      .catch(() => {
        console.log('Erro na promise');
      })
      .finally(() => {
        console.log('Finally promiseRace chamado');
      });
  }

  promiseAny() {
    Promise.any([
      this._promissesService.getUsers(),
      this._promissesService.getTodos(),
    ])
      .then((result) => {
        console.log('Then promise any', result);
      })
      .catch(() => {
        console.log('Erro na promise');
      })
      .finally(() => {
        console.log('Finally promiseAny chamado');
      });
  }

  promiseAllSettled() {
    Promise.allSettled([
      this._promissesService.getUsers(),
      this._promissesService.getTodos(),
    ])
      .then((result) => {
        console.log('Then promise allSettled', result);
      })
      .catch(() => {
        console.log('Erro na promise');
      })
      .finally(() => {
        console.log('Finally promiseAllSettled chamado');
      });
  }

  async asyncAwaitUser() {
    console.log('asyncAwaitUser chamado');
    const user = await this._promissesService.getUserById(1);
    console.log('User: ', user);
    console.log('asyncAwaitUser finalizado');
  }
}
