import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../_shared/baseUrl';
import { User } from '../_models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,
    private errorService: ErrorService) {
  }

  getUser(id: string, key: string): Observable<User> {
    return this.http.get<User>(baseUrl + '/users/' + id)
      .pipe(catchError(this.errorService.printError));
  }
}

