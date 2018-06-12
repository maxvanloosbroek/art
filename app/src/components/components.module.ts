import { NgModule } from '@angular/core';
import { ArtButtonRoundComponent } from './art-button-round/art-button-round';
import { ArtButtonRectangleComponent } from './art-button-rectangle/art-button-rectangle';
import { SvgComponent } from './svg/svg';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ArtButtonRoundComponent,
    ArtButtonRectangleComponent,
    SvgComponent],
    imports: [CommonModule],
	exports: [ArtButtonRoundComponent,
    ArtButtonRectangleComponent,
    SvgComponent]
})
export class ComponentsModule {}
