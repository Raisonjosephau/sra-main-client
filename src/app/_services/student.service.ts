import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs/';
import {tap, catchError } from 'rxjs/operators' 

const PARAMS = new HttpParams();

import {Student} from '../models/student';
import * as Server from '../models/server.config'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  getDetails(studentId : any) {
    return this.http.get(Server.BASE_API_URL + Server.STUDENT_BASE + studentId);
  }
  getSemesterResult(semester : any, studentId : any){
    return this.http.get(Server.BASE_API_URL + Server.STUDENT_BASE + studentId, {params: PARAMS.set('semester', semester)});
  }

}
