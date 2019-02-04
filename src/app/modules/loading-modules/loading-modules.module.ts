import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// My imports
import { AngularfireLoadingModule } from './angularfire/angularfire.loading.module';
import { AngularMaterialLoadingModule } from './angular-material/angular-material.loading.module';

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: [ 
    AngularfireLoadingModule,
    AngularMaterialLoadingModule
  ]
}

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
export class LoadingModulesModule { }
