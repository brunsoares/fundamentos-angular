import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TextLowerPipe } from '../../pipes/text-lower.pipe';
import { ChangeColorDirective } from '../../directives/change-color.directive';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-comp-01',
  standalone: true,
  imports: [CommonModule, TextLowerPipe, ChangeColorDirective],
  templateUrl: './comp-01.component.html',
  styleUrl: './comp-01.component.scss',
})
export class Comp01Component implements OnInit {
  constructor(private readonly _personService: PersonService) {}

  ngOnInit() {
    this._personService.getPerson().subscribe(console.log);
  }
}
