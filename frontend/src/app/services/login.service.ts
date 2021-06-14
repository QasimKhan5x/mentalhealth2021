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
  /**
   * Takes the user id and fetches USer from databse
   * @param id To fetch corresponding user
   * @returns Returns an observable of User
   */
  getUser(id: string): Observable<[User]> {
    console.log('gettinguser of ', id);

    return this.http.get<[User]>(baseUrl + '/users?' + id)
      .pipe(catchError(this.errorService.printError));
  }
}

