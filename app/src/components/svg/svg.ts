import { Component, Input } from '@angular/core';

/**
 * Generated class for the SvgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'art-svg',
  templateUrl: 'svg.html'
})
export class SvgComponent {

  @Input() type: string;

  constructor() {
  }

}
