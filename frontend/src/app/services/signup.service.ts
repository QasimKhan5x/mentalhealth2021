import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewUser } from '../_models/newUser';
import { User } from '../_models/user';
import { baseUrl } from '../_shared/baseUrl';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient,
    private errorService: ErrorService) { }

  createUser(newUser: NewUser): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'dataType': 'application/json'
      })
    };
    return this.http.post<User>(baseUrl + '/users', newUser, options)
      .pipe(catchError(this.errorService.printError));
  }
}