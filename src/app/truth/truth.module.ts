import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruthComponent } from './truth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TruthComponent],
  exports: [TruthComponent]
})
export class TruthModule { }
