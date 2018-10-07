import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import * as Server from '../models/server.config'

const PARAMS = new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) {}
  
  getSubjectResult(semester : any, batch : any){
    let params = PARAMS.set('semester', semester);
    params = params.set('batch', batch);
    return this.http.get(Server.BASE_API_URL +  Server.DEMO_SUBJECT,{params: params});
  }
}
