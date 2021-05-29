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

export class UserService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }
  /**
   * takes id of user and fetches user data from DB
   * @param id Id of user
   * @returns Observable of User
   */
  getUser(id: string): Observable<User> {
    return this.http.get<User>(baseUrl + '/users/' + id)
      .pipe(catchError(this.errorService.printError));
  }
  /**
   * Provide a copy of updated User and when this PUT request succeeds, update local User data
   * @param user Takes the User Object (currenlty logged in)
   * @returns Observable of User
   */
  updateUser(user: User): Observable<User> {
    const options = {
      headers: new HttpHeaders({
        'dataType': 'application/json'
      })
    };
    return this.http.put<User>(baseUrl + '/users/' + user.id, user, options)
      .pipe(catchError(this.errorService.printError));
  }
}
