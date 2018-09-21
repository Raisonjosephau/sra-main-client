import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/';

//

import {Subject} from '../models/subject';
import {Batch} from '../models/batch';
import {Student} from '../models/student';

const PARAMS = new HttpParams();


@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}
    getDetails() {
        return this.http.get('http://127.0.0.1:8000/accounts/staffs/');
    }
    getProgress() {
        return this.http.get('http://127.0.0.1:8000/accounts/prgress/');
    }

    uploadFile(data: any) {
        return this.http.post('http://127.0.0.1:8000/accounts/files/', data);
    }
    getSubjects(): Observable<Subject[]> {
        return this.http.get<Subject[]>('http://127.0.0.1:8000/accounts/subjects/');

    }
    postSubject(data: any) {
        return this.http.post('http://127.0.0.1:8000/accounts/subjects/', data);
    }

    getBatches(): Observable<Batch[]> {
        return this.http.get<Batch[]>('http://127.0.0.1:8000/accounts/batch/')
    }
    postBatch(data: any) {
        return this.http.post('http://127.0.0.1:8000/accounts/batch/', data);
    }

    serachStudent(search: any): Observable<Student[]> {
        return this.http.get<Student[]>('http://127.0.0.1:8000/accounts/students/', {params: PARAMS.set('search', search)});
    }
}
