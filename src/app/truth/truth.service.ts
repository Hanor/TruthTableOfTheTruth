import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TruthService {
  inputType$ = new BehaviorSubject( null );
  constructor() { }

}
