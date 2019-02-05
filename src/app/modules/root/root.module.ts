import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootRoutingModule } from './root-routing.module';
import { PhonebookModule } from './../phonebook/phonebook.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// My imports
import { AuthenticationModule } from './../authentication/authentication.module';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    PhonebookModule,
    NavigationModule,
    RootRoutingModule
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
