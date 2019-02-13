import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatCardModule,
} from '@angular/material';

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule,
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
export class AuthenticationLoadingAngularMaterialModule { }
