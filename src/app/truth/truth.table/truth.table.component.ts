import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-truth.table',
  templateUrl: './truth.table.component.html',
  styleUrls: ['./truth.table.component.scss']
})
export class TruthTableComponent implements OnInit {
  @ViewChild("result") divAddVariable: ElementRef;
  variables = [];
  binaries: BehaviorSubject<Array<any>> = new BehaviorSubject(new Array());
  result = { name: "result", binaries: this.binaries };
  resultWasEdited = false;
  newVariable = false;
  editing = false;
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
    const binaries = Math.pow( 2, size );
    for( let i = 0; i < size; i++ ) {
      const variable = this.variables[i];
      variable.binaries = [];
      const inversor = binaries / (Math.pow(2, (i + 1)));
      for ( let j = 0; j < binaries; j++ ) {
        const rest = parseInt((( j / inversor ) + ""), 10);
        variable.binaries.push(( rest % 2 === 0 ) ? 0 : 1);
      }
    }
    const values = [];
    for( let i = 0; i < binaries; i++) {
      values.push({indice: i, number: 0, expression: ""});
    }
    this.result.binaries.next(values);
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

  minExpressionForLine( indice ) {
    let expression = "";
    const binary = this.binaries.getValue()[indice];
    for ( let variable of this.variables ) {
      let argument = (variable.binaries[ indice ] == "1") ? variable.name : ("!" + variable.name);
      expression += (expression != "") ? ("." + argument)  : argument
    }
    binary.expression = expression;
  }

  resultEdit( event, binary ) {
    const value =  (event.target.value).toLowerCase();
    if ( value == "" || ( value != "0" && value != "1" && value != "x" )) {
      event.target.value = binary.number
    } else {
      binary.number = value;
      if ( value == 1 ) {
        this.minExpressionForLine( binary.indice );
      } else {
        binary.expression = "";
      }
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