import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule
} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel'

const MATERIAL_MODULES = [
  MatIconModule,
  MatCarouselModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule
];

@NgModule({
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class MaterialModule { }
