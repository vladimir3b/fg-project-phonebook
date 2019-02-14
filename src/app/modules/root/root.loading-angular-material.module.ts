import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatCardModule } from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const LOADING_AND_EXPORTING = {
  declarations: [],
  imports: [
    MatIconModule,
    FlexLayoutModule,
    MatCarouselModule,
    MatCardModule
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
export class RootLoadingAngularMaterialModule { }
