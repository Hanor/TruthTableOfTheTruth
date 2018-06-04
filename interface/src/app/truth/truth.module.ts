import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruthComponent } from './truth.component';
import { TruthTableComponent } from './truth.table/truth.table.component';
import { TruthHomeComponent } from './truth.home/truth.home.component';
import { TruthExpressionComponent } from './truth.expression/truth.expression.component';
import { TruthService } from './truth.service';
import { TemplateDirective } from '../shared/template.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ TruthComponent, TruthTableComponent, TruthHomeComponent, TruthExpressionComponent, TemplateDirective ],
  entryComponents:[ TruthTableComponent, TruthHomeComponent, TruthExpressionComponent ],  
  exports: [TruthComponent],
  providers: [ TruthService ]
})
export class TruthModule { }
