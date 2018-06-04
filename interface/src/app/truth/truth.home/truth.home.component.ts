import { Component, OnInit } from '@angular/core';
import { TruthService } from '../truth.service';

@Component({
  selector: 'app-truth.home',
  templateUrl: './truth.home.component.html',
  styleUrls: ['./truth.home.component.scss']
})
export class TruthHomeComponent implements OnInit {

  constructor(
    private truthService: TruthService
  ) { }

  ngOnInit() {
  }

  selecionado( inputType ) {
    this.truthService.inputType$.next( inputType )
  }
}
