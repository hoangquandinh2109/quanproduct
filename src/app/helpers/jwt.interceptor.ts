import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/core/authentication.service';
import { UtilsService } from '../services/core/utils.service';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    currentUser: any;
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(private authenticationService: AuthenticationService, private utilsService: UtilsService,private router: Router) {
    }
    token: any;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (!request.url.includes('Refresh') ) {
            // add authorization header with jwt token if available
            if (this.currentUser && this.currentUser.token) {
                request = this.addToken(request, this.currentUser.token);
            }
        }
        

        return next.handle(request).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    if (this.currentUser && this.currentUser.accessTokenExpiration) {
                        let accessTokenExpiration = new Date(this.currentUser.accessTokenExpiration);
                        let now = new Date();
                        if (now.getTime() > accessTokenExpiration.getTime()) {
                            return this.handle401Error(request, next);
                        } 
                    }
                }
                return throwError(error);
            })
        );
    }
    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authenticationService.refreshToken({ accessToken: this.currentUser.token, refreshToken: this.currentUser.refreshToken }).pipe(
                switchMap((token: any) => {
                    if(token.accessToken == null) {
                        this.authenticationService.logout();
                        this.router.navigate(['/sessiontimeout']);
                    } else{
                        // localStorage.setItem('lastSignedInTime', new Date().getTime().toString());
                        this.isRefreshing = false;
    
                        this.currentUser.token = token.accessToken;
                        this.currentUser.accessTokenExpiration = token.accessTokenExpiration;
                        this.currentUser.refreshToken = token.refreshToken;
                        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                        this.authenticationService.currentUserSubject.next(this.currentUser);
    
                        this.refreshTokenSubject.next(token.accessToken);
                        return next.handle(this.addToken(request, token.accessToken));
                    }
                })
            );

        } else {
            return this.refreshTokenSubject.pipe(
                filter(token => token != null),
                take(1),
                switchMap(accessToken => {
                    return next.handle(this.addToken(request, accessToken));
                }));
        }
    }
}