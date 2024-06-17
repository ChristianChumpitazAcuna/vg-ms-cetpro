import { Component, Input } from '@angular/core';
import { Cetpro } from 'src/app/interfaces/Cetpro';

@Component({
  selector: 'app-list-cetpro',
  templateUrl: './list-cetpro.component.html',
  styles: [
  ]
})
export class ListCetproComponent {
  @Input() data: Cetpro[] = [];

}
