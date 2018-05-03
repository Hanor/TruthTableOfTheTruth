import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxJs';

@Injectable()
export class TruthService {
  inputType$ = new BehaviorSubject( null );
  constructor() { }

}
