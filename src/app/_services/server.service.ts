import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}
    getDetails() {
        return this.http.get('http://127.0.0.1:8000/accounts/staffs/');
    }
    uploadFile(data: any) {
        return this.http.post('http://127.0.0.1:8000/accounts/files/', data);
    }
}
