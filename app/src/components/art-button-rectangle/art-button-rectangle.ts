import { Component, Input } from '@angular/core';

/**
 * Generated class for the ArtButtonRectangleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'art-button-rectangle',
  templateUrl: 'art-button-rectangle.html'
})
export class ArtButtonRectangleComponent {
  @Input() text: string;

  constructor() {
  }

}
