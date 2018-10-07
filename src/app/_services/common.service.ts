import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs/';
import {tap, catchError } from 'rxjs/operators' 

import {Student} from '../models/student';
import {Batch} from '../models/batch';
import {Subject} from '../models/subject';
import * as Server from '../models/server.config'


const PARAMS = new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {}
  serachStudent(search: any): Observable<Student[]> {
    return this.http.get<Student[]>( Server.BASE_API_URL +  Server.DEMO_BASE + Server.DEMO_STUDENT_SEARCH, {params: PARAMS.set('search', search)}).pipe(
      tap(heroes => console.log('fetched heroes')),
      catchError(error => {
        //intercept the respons error and displace it to the console
        console.log(error);
        return of(error);
      })
    );
  }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>( Server.BASE_API_URL +  Server.DEMO_BASE + Server.DEMO_BATCH )
  }
  
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(Server.BASE_API_URL +  Server.DEMO_BASE + Server.DEMO_SUBJECT );
  }
}
