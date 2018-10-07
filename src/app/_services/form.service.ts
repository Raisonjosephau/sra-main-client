import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';


import * as Server from '../models/server.config'

@Injectable({
  providedIn: 'root'
})
export class FormService {

    constructor(private http: HttpClient) {}

    postSubject(data: any) {
          return this.http.post( Server.BASE_API_URL+Server.DEMO_BASE+Server.DEMO_SUBJECT, data);
    }
    postBatch(data: any) {
          return this.http.post( Server.BASE_API_URL+Server.DEMO_BASE+Server.DEMO_BATCH, data);
    }
    
    uploadFile(data: any) {
      return this.http.post(Server.BASE_API_URL+Server.DEMO_BASE+Server.DEMO_FILE_UPLOAD, data);
    }
}
