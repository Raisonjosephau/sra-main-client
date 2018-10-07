import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import * as Server from '../models/server.config'


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getSummery(){
    return this.http.get( Server.BASE_API_URL+Server.DEMO_BASE+Server.DEMO_RESULT);
  }
  getHistory(){
    return this.http.get( Server.BASE_API_URL+Server.DEMO_BASE+Server.DEMO_RESULT);
  }
  getClassPerformance(){
    return this.http.get( Server.BASE_API_URL+Server.DEMO_BASE+Server.DEMO_RESULT);
  }

}
