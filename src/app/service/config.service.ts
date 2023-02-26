import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl : string = 'http://localhost:8080/labseq'

  getLabseqValue(value:number){
    return this.http.get<String>(`${this.configUrl}/${value}`)
  }

}