import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }


    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        // handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            // navigate /delete cookies or whatever
            this.router.navigateByUrl(`/login`);
            // if you've caught / handled the error, you don't want to rethrow
            return of(err.message);
        }
        return Observable.throw(err);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('logedUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `JWT ${currentUser.token}`,
                }
            });
        }

        return next.handle(request).pipe(catchError((error, caught) => {
			//intercept the respons error and displace it to the console
			console.log(error);
			this.handleAuthError(error);
			return of(error);
		  }) as any);
    }
}
