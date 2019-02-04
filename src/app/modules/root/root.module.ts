import { PhonebookModule } from './../phonebook/phonebook.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// My imports
import { AuthenticationModule } from './../authentication/authentication.module';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingModulesModule } from '../loading-modules/loading-modules.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    RootComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    LoadingModulesModule,
    PhonebookModule,
    NavigationModule
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
