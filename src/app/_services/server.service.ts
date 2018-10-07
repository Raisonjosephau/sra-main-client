import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/';

//


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
}
