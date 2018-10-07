import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {

      const formData: FormData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      return this.http
                  .post<any>('http://127.0.0.1:8000/accounts/login/', formData).pipe(
        map(data => {
        // login successful if there's a jwt token in the response
        if (data.token) {
            localStorage.setItem('logedUser', JSON.stringify(data));
        }
        return data;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
