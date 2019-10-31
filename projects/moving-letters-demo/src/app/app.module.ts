import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMovingLettersModule } from 'ng-moving-letters';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMovingLettersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
