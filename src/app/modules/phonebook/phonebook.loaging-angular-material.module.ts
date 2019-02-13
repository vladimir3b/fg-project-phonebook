import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatCardModule,
} from '@angular/material';

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: [
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
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
export class PhonebookLoadingAngularMaterialModule { }
