import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// My imports
import { RootLoadingAngularMaterialModule } from './root.loading-angular-material.module';
import { AuthenticationModule } from './../authentication/authentication.module';
import { HomeComponent } from './components/home/home.component';
import { NavigationModule } from '../navigation/navigation.module';
import { PhonebookModule } from './../phonebook/phonebook.module';
import { RootRoutingModule } from './root.routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RootLoadingAngularMaterialModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    PhonebookModule,
    NavigationModule,
    RootRoutingModule
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
