import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel'

const MATERIAL_MODULES = [
  MatIconModule,
  MatCarouselModule
];

@NgModule({
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class MaterialModule { }
