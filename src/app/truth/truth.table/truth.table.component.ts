import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-truth.table',
  templateUrl: './truth.table.component.html',
  styleUrls: ['./truth.table.component.scss']
})
export class TruthTableComponent implements OnInit {
  @ViewChild("result") divAddVariable: ElementRef;
  lines$: BehaviorSubject<Array<any>> = new BehaviorSubject(new Array());
  editing = false;
  finalExpression = null;
  newVariable = false;
  result = { name: "result", lines: this.lines$ };
  resultWasEdited = false;
  variables = [];
  constructor() { }

  ngOnInit() {
    this.variables.push({ name: "A" });
    this.generateBinaries();
  }

  addVariable() {
    this.newVariable = true;
  }

  canEdit() {
    this.editing = true
  }

  editEnd(evento, i) {
    const value = evento.target.value;
    if ( value && value !== "") {
      const variable =  this.variables[i];
      variable.name = value;
    } else if ( this.variables.length > 1 ) {
      this.removeVariable( i );
    } else {
      evento.target.value = this.variables[i].name;
    }
  }

  generateBinaries() {
    const size = this.variables.length;
    const lines = Math.pow( 2, size );
    for( let i = 0; i < size; i++ ) {
      const variable = this.variables[i];
      variable.lines = [];
      const inversor = lines / (Math.pow(2, (i + 1)));
      for ( let j = 0; j < lines; j++ ) {
        const rest = parseInt((( j / inversor ) + ""), 10);
        variable.lines.push(( rest % 2 === 0 ) ? 0 : 1);
      }
    }
    const newValues = [];
    const oldValues = this.result.lines.getValue();
    for( let i = 0; i < lines; i++) {
      let oldValue = oldValues[i];
      if ( oldValue && oldValue.number == "1" ) {
        newValues.push( oldValue );
        this.minExpressionForLine( oldValue );
      } else {
        newValues.push({indice: i, number: 0, expression: ""});
      }
    }
    this.result.lines.next(newValues);
    this.minExpression();
  }

  haveNewVariable( value ) {
    setTimeout(() => {
      if ( this.newVariable && value && value !== "") {
        this.variables.push({ name:value })
        this.generateBinaries();
      }
      this.newVariable = false;
    }, 100)
  }

  minExpressionForLine( line ) {
    let expression = "";
    for ( let variable of this.variables ) {
      let argument = (variable.lines[ line.indice ] == "1") ? variable.name : ("!" + variable.name);
      expression += (expression != "") ? ("." + argument)  : argument
    }
    line.expression = expression;
  }

  minExpression() {
    this.finalExpression = "";
    for ( let line of this.lines$.getValue() ) {
      if ( line.expression ) {
        this.finalExpression += "( "+ line.expression +" ) + "
      }
    }
    this.finalExpression = this.finalExpression.replace(/ \+ $/g, "");
  }

  resultEdit( event, line ) {
    const value =  (event.target.value).toLowerCase();
    if ( value == "" || ( value != "0" && value != "1" && value != "x" )) {
      event.target.value = line.number
    } else {
      line.number = value;
      if ( value == 1 ) {
        this.minExpressionForLine( line );
      } else {
        line.expression = "";
      }
      this.minExpression();
    }
  }

  removeVariable( i ) {
    if ( this.variables.length > 1 ) {
      const removed = this.variables.splice(i, 1);
      this.generateBinaries();
      return removed;
    }
  }
}