import { NgModule } from '@angular/core';
import { NgMovingLettersComponent } from './ng-moving-letters.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgMovingLettersComponent],
  imports: [
    CommonModule
  ],
  exports: [NgMovingLettersComponent]
})
export class NgMovingLettersModule { }
