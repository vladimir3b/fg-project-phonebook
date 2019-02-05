import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule
} from '@angular/material';

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule
  ]
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ]
})
export class AngularMaterialLoadingModule { }
