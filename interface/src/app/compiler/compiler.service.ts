import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { McCluskeyResolved } from '../shared/mc.cluskey';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  URL: string = '/api';
  httpOptions;
  constructor(private http: HttpClient ) {}

  mcCluskey( expression: string ): Observable<McCluskeyResolved> {
    return this.http.post<McCluskeyResolved>(this.URL + '/mcCluskey', {expression:expression});
  }
}
