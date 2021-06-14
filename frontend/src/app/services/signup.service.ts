import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';
import { baseUrl } from '../_shared/baseUrl';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient,
    private errorService: ErrorService) { }
  /**
   * Takes New User Object and puts it into database using POST method
   * @param newUser takes NewUser Object containing required fields
   * @returns Observable of User or an Error in case Server throws it
   */
  createUser(newUser: { email: string, password: string, profilePicURL: string }): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'dataType': 'application/json'
      })
    };
    return this.http.post<User>(baseUrl + '/users', newUser, options)
      .pipe(catchError(this.errorService.printError));
  }
}
