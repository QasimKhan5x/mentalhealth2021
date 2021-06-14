import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Entry } from '../_models/entry';
import { User } from '../_models/user';
import { baseUrl } from '../_shared/baseUrl';
import { ErrorService } from './error.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private userService: UserService,
  ) { }
  /**
   * Get Entries From A Specific User
   * @param userID takes Id of currently looged in user
   * @returns observable of all enteries
   */
  getEnteries(userID: string): Observable<Entry[]> {
    let url = baseUrl + '/entries/' + userID;
    console.log('accessing url ', url, " for enteries of id: ", userID);

    return this.http.get<Entry[]>(url)
      .pipe(catchError(this.errorService.printError));
  }
  /**
   * Posts an entry into the Database.
   * @param entry Takes Entry containing the id of current User and puts it inot database.
   * @returns Observable of Current Entry Object
   */
  addEntry(entry: Entry): Observable<Entry> {
    const options = {
      headers: new HttpHeaders({
        'dataType': 'application/json'
      })
    };
    return this.http.post<Entry>(baseUrl + '/entries/', entry, options)
      .pipe(catchError(this.errorService.printError));
  }
}
