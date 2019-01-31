import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule
];

@NgModule({
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class MaterialModule { }
