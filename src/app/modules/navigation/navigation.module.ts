import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // we need it when we use routeLink directive
// My imports
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { LoadingModulesModule } from './../loading-modules/loading-modules.module';

const LOADING_AND_EXPORTING = {
  declarations: [    
    FooterComponent,
    HeaderComponent,
    NavigationMenuComponent,
    SidebarNavigationComponent,
  ],
  imports: [
    LoadingModulesModule
  ]
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    RouterModule,
    CommonModule,
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ]
})
export class NavigationModule { }
