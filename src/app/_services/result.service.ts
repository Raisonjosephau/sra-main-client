import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import * as Server from '../models/server.config'

const PARAMS = new HttpParams();

@Injectable({
  providedIn: 'root'
})


export class ResultService {

  constructor(private http: HttpClient) {}

  getPublishedResult(semster : any, batch :  any) {
    let params = PARAMS.set('semester', semster);
    params = params.set('batch', batch);
    return this.http.get(Server.BASE_API_URL +  Server.DEMO_BASE + Server.DEMO_STUDENT_SEARCH,{params: params});
  }

  getResult(resultID : any){
      return this.http.get(Server.BASE_API_URL+Server.DEMO_RESULT+ resultID)
  }
}
