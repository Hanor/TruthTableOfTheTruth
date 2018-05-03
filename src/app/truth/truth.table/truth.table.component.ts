import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truth.table',
  templateUrl: './truth.table.component.html',
  styleUrls: ['./truth.table.component.scss']
})
export class TruthTableComponent implements OnInit {
  variables = [];
  constructor() { }

  ngOnInit() {
    this.variables.push({ name: "A" });
  }

  addNewVariable() {
    this.variables.push({ name: "ok" });
  }
}
