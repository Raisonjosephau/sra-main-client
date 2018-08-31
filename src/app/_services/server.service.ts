import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map
} from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';

//

import {Subject} from '../models/subject'

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}
    getDetails() {
        return this.http.get('http://127.0.0.1:8000/accounts/staffs/');
    }

    uploadFile(data: any) {
        return this.http.post('http://127.0.0.1:8000/accounts/files/', data);
    }
    getSubjects(): Observable<Subject[]> {
        return this.http.get<Subject[]>('http://127.0.0.1:8000/accounts/subjects/');

    }
}
