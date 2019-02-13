import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// My imports
import { HomeComponent } from './components/home/home.component';

const ROUTERS: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTERS),
  ],
  exports: [
    RouterModule,
  ]
})
export class RootRoutingModule { }
