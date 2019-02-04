import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: []
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
export class AngularfireLoadingModule { }
