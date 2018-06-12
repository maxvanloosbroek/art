import { Component, Input } from '@angular/core';

/**
 * Generated class for the ArtButtonRoundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'art-button-round',
  templateUrl: 'art-button-round.html'
})
export class ArtButtonRoundComponent {
  @Input() text: string;
  @Input() icon: string;

  constructor() {
  }

}
